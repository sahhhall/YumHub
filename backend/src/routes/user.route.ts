import express, { Request, Response } from 'express';
import { loginUser } from '../controllers/auth/login.controller';
import { registerUser } from '../controllers/auth/signup.conroller';
import { protectAuth } from '../middleware/auth.middleware';
const router = express.Router();


router.post('/register', registerUser);
router.post('/login',   loginUser);

router.get('/test', protectAuth ,async ( req: any , res) => {
    console.log(req.user);
    return res.json({ message:"all "})
  
    
} )




export default router;