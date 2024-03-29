import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import { connectDB } from './config/db.config';
import cookieParser from 'cookie-parser';
const app = express();
import userRoute from './routes/user.route';
import restaurantRouter from './routes/restaurant.route';

connectDB();


app.use(cors({
    origin: ['https://yumhubb.onrender.com', 'http://localhost:5173', 'https://yumhub.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(cookieParser());


app.use('/api/', userRoute);
app.use('/api/', restaurantRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
