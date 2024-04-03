import express from "express";
import { protectAuth } from "../middleware/auth.middleware";
import { nearestStore } from "../controllers/restraurants/nearestStore.controller";
import { getAllRestaurants } from "../controllers/restraurants/getRestaurants.controller";
const router = express.Router();

router.post("/nearest-store", nearestStore);
router.get("/all-stores", getAllRestaurants);



export default router;