import { Request, Response } from 'express';
import User from '../../models/User.model';
import bcrypt from 'bcrypt';
import  { refreshToken, signAccessToken } from '../../services/auth/jwtService';
import mongoose from 'mongoose';

interface IUloginBody {
    email: string,
    password: string
}

export const loginUser = async (req: Request<unknown, unknown, IUloginBody>, res: Response) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({ email:email });
        if( !user ) {
            return res.status(401).json({ message:"no user with enterd mail "})
        };
       
        const verifyPassword = await bcrypt.compare(password, user.password);
        if( !verifyPassword ) {
            return res.status(401).json({ message: "incorrect password" })
        };
        
        const accessToken = await signAccessToken( user?._id as mongoose.Types.ObjectId );
        const refrshToken = await refreshToken( user?._id as mongoose.Types.ObjectId );
        res.status(200).json({ message: "Login successful.", user, accessToken});

    } catch( error ) {
        console.error('Error login user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
}

