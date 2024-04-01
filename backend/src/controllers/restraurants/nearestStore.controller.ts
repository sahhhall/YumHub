import { Request, Response } from "express-serve-static-core";
import Restraunt from "../../models/Restraunt.model";

export const nearestStore = async (req: Request, res: Response) => {
  try {
    const { longitude, latitude } = req.body;
    const restaurants = await Restraunt.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          spherical: true,
          //  in meter
          maxDistance: 1000000,
        },
      },
    ]);

    return res.status(201).json({
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
