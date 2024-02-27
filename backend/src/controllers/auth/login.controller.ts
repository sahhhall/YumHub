import { Request, Response } from 'express';
import User from '../../models/User.model';
import bcrypt from 'bcrypt';

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

