import express from "express";
import { UserController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAll);

export default userRouter;