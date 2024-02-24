import express, { Request, Response } from 'express';
import { registerUser } from '../controllers/auth.controller';
const router = express.Router();


router.post('/register',  registerUser)






export default router;