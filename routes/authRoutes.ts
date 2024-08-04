import express from 'express';
import authControllers from '../controllers/authControllers';
const authRouter = express.Router();

const { login, signup } = authControllers

authRouter.post('/login', login);
authRouter.post('/signup', signup);

export default authRouter;