import { Request, Response } from "express";
import User from "../../models/User.model";

interface IRequest extends Request {
  user?: string;
}

export const updateUser = async (req: IRequest, res: Response) => {
  try {
    const { address, city, country } = req.body;
    console.log("loggggg", req.user,city,address,country);

    let user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({ message: "user not found " });
    }

    user = await User.findOneAndUpdate(
      { _id: req.user },
      {
        $set: {
          "address.addresLine": address,
          "address.city": city,
          "address.country": country,
        },
      },
      { new: true }
    ).select("-password");

    res.status(201).json({ message: "profile updated successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error " });
  }
};
