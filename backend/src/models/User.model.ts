import  { Schema, model } from "mongoose";



interface IUser {
    name: string;
    email: string;
    password: string;
    address: IAddress;
}

interface IAddress {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: number
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true
    },
    password: {
        type: String,
    },
    address: 
        {
            addresLine: {
                type: String
            },
            city: {
                type: String,
                default: "Calicut"
            },
            state: {
                type: String
            },
            country: {
                default: "India",
                type: String
            },
            postalCode: {
                type: Number
            }
        }
    
})

const User = model<IUser>('User', userSchema);
export default User;