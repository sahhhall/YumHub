import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken';

interface ICustomRequest extends Request {
    user?: string
}

export const protectAuth = async (req: ICustomRequest, res: Response, next: NextFunction) => {
    console.log("d");
    
    if (!req.headers.cookie) {
        return res.status(401).json({ message: 'Unauthorized - No authorization header found' });
    }
    
    const cookies = req.headers.cookie;
    console.log(cookies);
    
    let google: string | undefined;
    
    if (cookies.startsWith("g")) {
        var parts = cookies.split(";")[1];
        google = parts.split("=")[1]; 
    }
   
    const token = cookies.startsWith("g") ? google : cookies?.split("=")[1];
    console.log(token);
    
    try {
        const { id } = JWT.verify(String(token), process.env.ACCESS_TOKEN_SECRET as string) as JWT.JwtPayload;
        console.log(id);
        req.user = id;  
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};
