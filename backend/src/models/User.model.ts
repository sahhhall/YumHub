import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  address: IAddress;
  picture: string;
}

interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  picture: {
  type: String
  },
  password: {
    type: String,
  },
  address: {
    addresLine: {
      type: String,
      default:"***",
    },
    city: {
      type: String,
      default: "***",
    },
    country: {
      type: String,
      default: "***",
    },
  },
});

const User = model<IUser>("User", userSchema);
export default User;
