import { Request, Response } from "express-serve-static-core";
import Restraunt from "../../models/Restraunt.model";

interface IRequest extends Request {
  user?: string;
}

export const getMyRestaurant = async (req: IRequest, res: Response) => {
  try {
    const userId = req.user;
    console.log(userId);
    // userId setted to restraunt id so we get by this
    const userRestaurant = await Restraunt.findById(userId);
    if (!userRestaurant) {
      return res
        .status(404)
        .json({ message: "no restarunt registerd with  this user" });
    }
    console.log(userRestaurant);

    return res.status(201).json({ userRestaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
