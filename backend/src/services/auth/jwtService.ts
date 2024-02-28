import JWT from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

interface JwtPayload {
    id: mongoose.Types.ObjectId;
    // name: string
  }
export const signAccessToken = async (userID: mongoose.Types.ObjectId): Promise<string> => {
    try {
        const payload: JwtPayload = {
            id: userID,
        }
        const secret = process.env.ACCESS_TOKEN_SECRET as string;
        const options = {
            expiresIn: "30s",
            issuer: "YumHub.com",
        }
      const token: string | undefined = await JWT.sign(payload, secret, options)
      return token;
    } catch(error) {
        console.log( error );
        throw error;
    }
}

export const refreshToken = async (userID: mongoose.Types.ObjectId): Promise<string> => {
    try {
        const payload: JwtPayload = {
            id: userID,
        }
        const secret = process.env.REFRESH_TOKEN_SECRET as string;
        const options = {
            expiresIn: "15d",
            issuer: "YumHub.com",
        }
      const token: string | undefined = await JWT.sign(payload, secret, options)
      return token;
    } catch(error) {
        console.log( error );
        throw error;
    }
}

// export verifyRefreshToken = async () => {}