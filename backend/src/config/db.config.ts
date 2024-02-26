import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connected to ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};
