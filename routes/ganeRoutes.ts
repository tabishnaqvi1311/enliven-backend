import express from "express"
import gameController from "../controllers/gameController";
const gameRouter = express.Router();

const {updateScore} = gameController

gameRouter.post('/:id/update-score', updateScore)

export default gameRouter;