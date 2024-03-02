import { Request, Response } from 'express';
import User from '../../models/User.model';
import {  OAuth2Client } from 'google-auth-library';
import mongoose from 'mongoose';
import { signAccessToken } from '../../services/auth/jwtService';

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const expiryDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

export const googleLoginAuth = async (req: Request, res: Response) => {
    try {
        const { credential } = req.body;

     
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: CLIENT_ID,
        });
        const payload: any = ticket.getPayload();
        const { name, email } = payload;

       
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name: name,
                email: email
            })
        }

        // Generate access token
        const accessToken = await signAccessToken(user._id as mongoose.Types.ObjectId);

        
        res.cookie(String(user._id), accessToken, {
            path: '/',
            expires: expiryDate,
            httpOnly: true,
            sameSite: 'lax',
        });

      
        res.status(200).json({ message: "Login successful.", user, accessToken });
    } catch (error) {
        console.error('Error during Google authentication:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};
