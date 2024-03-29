import express from "express";
import { upload } from "../middleware/multer.config";
import { myRestraurentManagment } from "../controllers/restraurant/myRestraurant.controller";
import { protectAuth } from "../middleware/auth.middleware";
import { getMyRestaurant } from "../controllers/restraurant/getRestraurant.controller";
const router = express.Router();


router.get(
  "/getrestaurant",
  protectAuth,
  getMyRestaurant
)

router.post(
  "/restaurant",
  upload.single("imageUrl"),
  protectAuth,
  myRestraurentManagment
);


export default router;
