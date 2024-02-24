import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import { connectDB } from './config/db.config';
const app = express();
import userRoute from './routes/user.route'


connectDB();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello" });
});

app.use('/api/', userRoute)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
