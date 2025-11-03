const router = require("express").Router();

// const NotFoundError = require("../errors/not-found-error");
import userRouter from "./userRoute";

router.use("/", userRouter);

// router.use(() => {
//   throw new NotFoundError("Pathway does not exist");
// });

export default router;
