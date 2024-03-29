import { Request, Response } from 'express';
import User from '../../models/User.model';
import { hashedPassword } from '../../services/auth/passwordHasher';
import { signAccessToken } from '../../services/auth/jwtService';
import mongoose from 'mongoose';
 '../../services/auth/jwtService';

interface RegisterUserRequestBody {
    name: string;
    email: string;
    password: string;
}
export const registerUser = async (req: Request<unknown, unknown, RegisterUserRequestBody>, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if ( !name || !email || !password ) {
            return res.status(400).json({ message: 'Please provide name, email, and password' });
        }
        
        const userExist = await User.findOne({ email: email })
        if(userExist) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const securePassword = await hashedPassword( password )
        const newUser = await User.create({
            name: name,
            email: email,
            password: securePassword
        })
        const accessToken = await signAccessToken( newUser?._id as mongoose.Types.ObjectId  );

        if( newUser ){
            res.status(201).json({ user:newUser, accessToken })
        }

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
};

