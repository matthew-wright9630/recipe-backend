import type { Request, Response } from "express";
import { userModel } from "../models/userModel";

export const UserController = {
  async getAll(_req: Request, res: Response) {
    console.log("getAll method");
    try {
      const students = await userModel.getAllUsers();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },
};