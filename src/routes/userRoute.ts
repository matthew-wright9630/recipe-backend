import express from "express";
import { UserController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAll);
userRouter.post("/login", UserController.login);
userRouter.post("/signup", UserController.createUser);

export default userRouter;
