import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import { connectDB } from './config/dbConnection';
const app = express();


connectDB();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello" });
});

const port = 3001;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
