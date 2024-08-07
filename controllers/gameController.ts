import { Request, Response } from "express"
import db from "../lib/db";

const gameController = {
    updateScore: async (req: Request, res: Response) => {
        const { score } = req.body;
        
        await db.child.update({
            where: {id: "clzfpximq0000ulk494jyjvkq"},
            data: {
                confidence: score
            }
        });

        return res.status(200).json('score updated');
    }
}

export default gameController;