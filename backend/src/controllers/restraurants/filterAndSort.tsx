import { Request, Response } from "express";
import Restraunt from "../../models/Restraunt.model";

interface IRequest extends Request  {
    page?: number;
}

export const filterAndSort = async (req: IRequest , res: Response) => {
    try { 
    
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "internal server error"})
    }  
}