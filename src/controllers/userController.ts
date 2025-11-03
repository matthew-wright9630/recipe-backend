import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../models/userModel";

const SALT_ROUNDS = 10;

export const UserController = {
  async getAll(_req: Request, res: Response) {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const existingUser = await userModel.getUserByEmail(email);
      if (!email) {
        throw new Error("Email must be provided.");
      }
      if (!name || !password) {
        throw new Error("Name and password must be provided.");
      }
      if (existingUser) {
        throw new Error("Email is already in use.");
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const newUser = await userModel.createUser({
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw new Error("Email and password must be provided.");
      }

      const user = await userModel.getUserByEmail(email);
      if (!user) {
        throw new Error("User was not found");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
