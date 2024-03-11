import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import { v2 as cloudinary } from 'cloudinary';
import { connectDB } from './config/db.config';
import cookieParser from 'cookie-parser';

const app = express();
import userRoute from './routes/user.route';


connectDB();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


app.use(cors({
    origin: ['https://yumhubb.onrender.com'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use('/api/', userRoute)


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
