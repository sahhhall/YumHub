import { Request, Response } from 'express';
import User from '../models/User.model';


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

        const newUser = await User.create({
            name: name,
            email: email,
            password: password
        })
        if( newUser ){
            res.status(201).json({ user: newUser })
        }

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
};
