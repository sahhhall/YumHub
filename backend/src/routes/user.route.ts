import express, { Request, Response } from 'express';
import { loginUser } from '../controllers/auth/login.controller';
import { registerUser } from '../controllers/auth/signup.conroller';
import { protectAuth } from '../middleware/auth.middleware';
import User from '../models/User.model';
const router = express.Router();


router.post('/register', registerUser);
router.post('/login',   loginUser);

interface Iuser extends Request {
    user?: string;
}

router.get('/test', protectAuth ,async ( req: Iuser , res:Response) => {
    
    const userID = req.user;
    const user = await User.findById(userID).select('-password');
    return res.json({ message:"all ", user})
    
} )




export default router;