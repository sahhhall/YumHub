import { Request, Response } from "express";
import Restraunt, { IRestraunt } from "../../models/Restraunt.model";
import cloudinary from "../../config/cloudinary.config";
interface IRequest extends Request {
    user?: string 
}

// interface IRestaurantDataBody {
//     restaurantName: string;
//     country: string;
//     city: string;
//     telephone: number;
//     openingHours: number;
//     servesCuisine: string[];
//     imageUrl: string;
//     menu: { name: string; price: number }[];
// }

export const myRestraurentManagment = async (req: IRequest, res: Response) => {
    try {
        console.log("hiii");
        
        const user = req.user;
        const { restaurantName, country, city, telephone, openingHours, servesCuisine, menu } = req.body;
        const restrauntExist = await Restraunt.findById(user);
        if ( restrauntExist ) {
            return res.status(409).json({ message: "user restraunt already exist" }); 
        }
        console.log("hh", restaurantName, country, city, telephone, openingHours, servesCuisine, menu)
        console.log(menu)
        const image = req.file as Express.Multer.File
        const base64Image = Buffer.from(image.buffer).toString("base64");
        // // mimetype for type of image like png....
        const dataURI = `data:${image?.mimetype};base64,${base64Image}`;

        const uploadToCloudResponse = await cloudinary.uploader.upload(dataURI);
        const newRestraurantData: IRestraunt = await Restraunt.create({
            restaurantName: restaurantName,
            country: country,
            city: city,
            _id: user,
            telephone: telephone,
            openingHours: openingHours,
            servesCuisine: servesCuisine,
            imageUrl: uploadToCloudResponse.secure_url,
            menu: menu
        })

        return res.status(201).json({ message: "restrant added successlly", restraunt: newRestraurantData })
        
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" } )   
    }
}