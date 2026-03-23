import express from "express";
import communityController from "../controllers/communityController.js";

const router = express.Router();

router.get("/", communityController.getCommunity);
router.post("/create", communityController.createCommunity);
router.delete("/delete/:id", communityController.deleteCommunity);

export default router;
