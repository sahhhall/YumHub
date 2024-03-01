import { Request, Response } from 'express';
import User from '../../models/User.model';
import JWT, { JwtPayload } from 'jsonwebtoken'




export const logOut = async (req: Request, res: Response) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies?.split("=")[1];
    if( !prevToken ) {
        return res.status(400).json({ message: "couldnt find token"});
    }
    try{
        const { id } = JWT.verify(String(prevToken), process.env.ACCESS_TOKEN_SECRET as string) as JWT.JwtPayload;
        res.clearCookie(` ${id} `);
        req.cookies[ ` ${id} `] = '';

        return res.status(200).json({
            message: " Successfully logout "
        })
    } catch (error) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
   
}