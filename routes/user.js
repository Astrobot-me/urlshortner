import express from 'express';
import { handleAddUser } from '../controllers/user.js';

const userRoute = express.Router()

userRoute.route("/signup").post(handleAddUser)


export default userRoute;