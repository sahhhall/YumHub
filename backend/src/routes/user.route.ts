import express, { Request, Response } from 'express';
import { loginUser } from '../controllers/auth/login.controller';
import { registerUser } from '../controllers/auth/signup.conroller';
import { protectAuth } from '../middleware/auth.middleware';
const router = express.Router();


router.post('/register', registerUser);
router.post('/login',  protectAuth, loginUser);






export default router;