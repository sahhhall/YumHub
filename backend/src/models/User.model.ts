import  { Schema, model } from "mongoose";

interface IUser {
    name: string,
    email: string,
    password: string
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
        required: true,
    }
})

const User = model<IUser>('User', userSchema);
export default User;