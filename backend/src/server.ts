import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import { connectDB } from './config/db.config';
import cookieParser from 'cookie-parser';

const app = express();
import userRoute from './routes/user.route';


connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/api/', userRoute)


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
