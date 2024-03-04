import express, { Request, Response } from 'express';
import { loginUser } from '../controllers/auth/login.controller';
import { registerUser } from '../controllers/auth/signup.conroller';
import { protectAuth } from '../middleware/auth.middleware';
import User from '../models/User.model';
import { logOut } from '../controllers/auth/logout.controller';
import { googleLoginAuth } from '../controllers/auth/googleLogin.controller';
import { updateUser } from '../controllers/user/update-profile.controller';
import { validatorMyUserRequest } from '../validator/user.validator';
const router = express.Router();

router.post('/googlelogin', googleLoginAuth)
router.post('/register', registerUser);
router.post('/login',   loginUser);
router.post('/logout', protectAuth, logOut);

router.put('/update-profile', validatorMyUserRequest, protectAuth ,updateUser);



interface Iuser extends Request {
    user?: string;
}

router.get('/test', protectAuth ,async ( req: Iuser , res:Response) => {
    
    const userID = req.user;
    const user = await User.findById(userID).select('-password');
    return res.json({ message:"all ", user})
    
} )




export default router;