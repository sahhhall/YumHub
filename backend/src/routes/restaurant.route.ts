import express from "express";
import { protectAuth } from "../middleware/auth.middleware";
import { nearestStore } from "../controllers/restraurants/nearestStore.controller";
const router = express.Router();

router.post("/nearest-store", nearestStore);




export default router;