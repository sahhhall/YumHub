import { Request, Response } from 'express';
import User from '../models/User.model';
import { hashedPassword } from '../services/auth/passwordHasher';
import  signAccessToken  from '../services/auth/jwtService';
import bcrypt from 'bcrypt';

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
            return res.status(400).json({ message: 'User already exists' });
        }
        const securePassword = await hashedPassword( password )
        const newUser = await User.create({
            name: name,
            email: email,
            password: securePassword
        })
        const accessToken = await signAccessToken( newUser._id );

        if( newUser ){
            res.status(201).json({ user: accessToken })
        }

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
};

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
        
        res.status(200).json({ message: "Login successful." });

    } catch( error ) {
        console.error('Error login user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
}