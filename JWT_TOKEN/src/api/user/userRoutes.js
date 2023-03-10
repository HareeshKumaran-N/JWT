import { Router } from "express";
import { loginUser,showData } from "./userController.js";
const userRouter=Router();

userRouter.get('/',showData);

userRouter.post('/login',loginUser);

export default userRouter;