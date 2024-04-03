import { Request, Response } from "express";
import Restraunt from "../../models/Restraunt.model";



export  const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const allRestaurants = await Restraunt.find();
        return res.status(201).json({
            restaraunts: allRestaurants
        })
    } catch ( error ) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
} 