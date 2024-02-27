import express, { Request, Response } from 'express';
import { loginUser } from '../controllers/auth/login.controller';
import { registerUser } from '../controllers/auth/signup.conroller';
const router = express.Router();


router.post('/register',  registerUser);
router.post('/login', loginUser);






export default router;