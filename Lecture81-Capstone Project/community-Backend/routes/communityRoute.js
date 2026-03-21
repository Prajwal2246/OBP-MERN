import express from "express";
import communityControler from "../controllers/communityControler.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  isHostMiddleware,
  communityControler.createCommunity,
);

router.post("/all", communityControler.getAllCommunities);
router.get("/specific", communityControler.getSpecificCommunity);
router.get("/with-members", communityControler.getCommunityWithMembers);

export default router;
