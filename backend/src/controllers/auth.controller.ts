import { Request, Response } from 'express';
import User from '../models/User.model';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if ( !name || !email || !password ) {
            res.status(400).send("please fill all");
            return;
        }
        
        const userExist = await User.findOne({ email: email })
        if(userExist) {
            res.status(400).send("user already exist");
            return;
        }

        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
        if( user ){
            res.status(201).json({user})
        }

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: "internal sever err"})
    }
};
