import JWT from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

interface JwtPayload {
    aud: ObjectId;
  }
const signAccessToken = async (userID: ObjectId): Promise<string> => {
    try {
        const payload: JwtPayload = {
            aud: userID
        }
        const secret = process.env.ACCESS_TOKEN_SECRET as string;
        const options = {
            expiresIn: "1H",
            issuer: "YumHub.com",
        }
      const token: string | undefined = await JWT.sign(payload, secret, options)
      return token;
    } catch(error) {
        console.log( error );
        throw error;
    }
}

export default signAccessToken;