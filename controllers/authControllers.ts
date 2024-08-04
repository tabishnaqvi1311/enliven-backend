import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express';
import db from '../lib/db';

const SECRET: string = 'jf9248jf348f9qj4039fj3'

const authControllers = {
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json("Please enter all fields");

        const doesEmailExist = await db.user.findUnique({
            where: { email: String(email) }
        });

        if (!doesEmailExist) return res.status(404).json("User not found");

        const doPasswordMatch = await bcrypt.compare(password, doesEmailExist.password);
        if (!doPasswordMatch) return res.status(400).json("Passwords do not match");

        const token = jwt.sign({ userId: doesEmailExist.id }, SECRET, { expiresIn: "2d" });

        return res.status(200).json({ userId: doesEmailExist.id, token });
    },

    signup: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json("please fill in the fields");

        const doesEmailExist = await db.user.findUnique({
            where: { email: String(email) }
        });

        if (doesEmailExist) return res.status(400).json("that email is taken");

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await db.user.create({
            data: {
                email: email,
                password: hash
            }
        });

        const token = jwt.sign({ userId: newUser.id }, SECRET, { expiresIn: "2d" });

        return res.status(201).json({ userId: newUser.id, token });
    }
}

export default authControllers