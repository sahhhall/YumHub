import express from "express";
import { upload } from "../middleware/multer.config";
import { myRestraurentManagment } from "../controllers/restraurant/myRestraurant.controller";
import { protectAuth } from "../middleware/auth.middleware";
const router = express.Router();

router.post(
  "/restraraunt",
  upload.single("imageFile"),
  protectAuth,
  myRestraurentManagment
);
router.get("/", (req, res) => {
  res.send("hii");
});

export default router;
