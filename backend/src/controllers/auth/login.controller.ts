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

        const currentDate = new Date();
        const expiryDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000);

        // httpOnly for using it only accessed and modifies in server not accessiblein client side cookies for security(XSS)
        // and samesite for another protection against CSRF attacks 
        res.cookie(String(user._id), accessToken, {
            path: '/',
            expires: expiryDate,
            httpOnly: true,
            sameSite: 'lax'
        })
        
        user.password = '';
        res.status(200).json({ message: "Login successful.", user, accessToken});

    } catch( error ) {
        console.error('Error login user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
}

