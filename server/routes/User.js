import express from 'express';
import { registerUser, loginUser } from '../controllers/users/User.controller.js';
const UserRouter = express.Router();

UserRouter.post('/login', loginUser)
UserRouter.post('/register', registerUser )


export default UserRouter ;
