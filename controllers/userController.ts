import { Request, Response } from 'express';
import db from '../lib/db';

const userControllers = {
    getUser: async (req: Request, res: Response) => {
        const { id } = req.params;

        const parent = await db.user.findUnique({
            where: { id: String(id) }
        })

        if (!parent) return res.status(400).json("user does not exist");
        return res.status(200).json(parent);
    },
    getChildren: async (req: Request, res: Response) => {
        const { id } = req.params;

        const children = await db.child.findMany({
            where: { userId: String(id) }
        });

        return res.status(200).json(children);
    },
    createChild: async (req: Request, res: Response) => {
        console.log('endpoint hit')
        const { id } = req.params;

        const { name, age } = req.body;

        const newChild = await db.child.create({
            data: {
                name: name,
                age: Number(age),
                knowledge: 0,
                confidence: 0,
                user: {connect: {id: id}}
            }
        });

        return res.status(200).json(newChild);

    }
}

export default userControllers;