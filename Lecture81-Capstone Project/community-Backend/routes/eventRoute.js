import express from "express";
import eventController from "../controllers/eventController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";

const router = express.Router();

// router.get("/:id", (req, res) => {});
// router.post("/rsvp", (req, res) => {});
// router.post("/cancel-rsvp", (req, res) => {});
router.post(
  "/create",
  authMiddleware,
  isHostMiddleware,
  eventController.createEvent,
);

export default router;
