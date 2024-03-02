import { Request, Response } from 'express';
import User from '../../models/User.model';
import JWT, { JwtPayload } from 'jsonwebtoken'


interface IRequest extends Request {
    user?: unknown
}

export const logOut = async (req: IRequest, res: Response) => { 
    const userid = req.user;
    console.log(req.user);
    if( !userid ) {
        return res.status(400).json({ message: "couldnt find user"});
    }
    try{
        res.clearCookie(` ${userid} `);
        req.cookies[ ` ${userid} `] = '';
        return res.status(200).json({
            message: " Successfully logout "
        })
    } catch (error) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
   
}