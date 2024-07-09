import express from 'express';
import { handleAddUser,handleUserLogin } from '../controllers/user.js';

const userRoute = express.Router()

userRoute.route("/signup").post(handleAddUser)
userRoute.route("/login").post(handleUserLogin)


export default userRoute;