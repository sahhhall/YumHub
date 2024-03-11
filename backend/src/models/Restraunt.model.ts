import mongoose, { Schema, model, Document } from 'mongoose';

interface IRestraunt extends Document {
    user: Schema.Types.ObjectId;
    restaurantName: string;
    country: string;
    city: string;
    telephone: number;
    openingHours: number;
    servesCuisine: string;
    menu: IMenu[];
    imageUrl: string

}

interface IMenu  {
    name: string;
    price: number;
}

const menuItemsSchema = new Schema<IMenu>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const restrauntSchema = new Schema<IRestraunt>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurantName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    openingHours: {
        type: Number,
        required: true
    },
    servesCuisine: {
        type: String,
        required: true
    },
    menu: [menuItemsSchema],
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Restraunt = model<IRestraunt>("Restaurant", restrauntSchema);
export default Restraunt;