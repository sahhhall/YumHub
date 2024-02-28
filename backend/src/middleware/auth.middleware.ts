import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken';

interface ICustomRequest extends Request {
    user?: string
}

export const protectAuth = async (req: ICustomRequest, res: Response, next: NextFunction) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {
        return res.status(401).json({ message: 'Unauthorized - No authorization header found' });
    }

    const headers: string | undefined = req.headers.authorization;
    console.log("hii");
    var token: string | undefined = headers.split(" ")[1];

    try {
        const { id } = JWT.verify(String(token), process.env.ACCESS_TOKEN_SECRET as string) as JWT.JwtPayload;
        console.log(id);
        req.user = id;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};
