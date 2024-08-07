import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import gameRouter from "./routes/ganeRoutes";

const app = express();
const port = 8181;

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/game', gameRouter);


app.listen(port, () => {
    console.log(`server alive at http://localhost:${port}`);
});