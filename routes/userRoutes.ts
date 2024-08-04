import express from 'express';
import userControllers from '../controllers/userController';
const userRouter = express.Router();
const { getUser, getChildren, createChild } = userControllers;

userRouter.get('/:id', getUser)
userRouter.get('/:id/children', getChildren);
userRouter.post('/:id/child', createChild);

export default userRouter;