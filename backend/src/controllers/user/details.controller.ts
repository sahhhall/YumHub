import { Request, Response } from "express";
import User from "../../models/User.model";

interface IRequest extends Request {
  user?: string;
}

export const UserDetails = async (req: IRequest, res: Response) => {
  try {
    let userId = req.user;

    if (!userId) {
      return res.status(404).json({ message: "user not found " });
    }

    const user = await User.findById(userId).select("-password");
    console.log(user);
    
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
