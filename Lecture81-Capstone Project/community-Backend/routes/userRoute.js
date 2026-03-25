import express from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isMemberMiddleware } from "../middlewares/isMemberMiddleware.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";
const router = express.Router();

router.post("/register", userController.register);
router.get("/login", userController.login);
router.patch("/community", authMiddleware, userController.joinCommunity);
router.patch("/make-host", authMiddleware, userController.makeHost);
router.get("/me", authMiddleware, userController.getCurrUser);
router.patch(
  "/leave-community/:id",
  authMiddleware,
  userController.leaveCommunity,
);

/* Dashboard means member dashboard */
/* HostDashboard means host dashboard */
router.get(
  "/dashboard",
  authMiddleware,
  isMemberMiddleware,
  userController.dashboard,
);

router.get(
  "/host/dashboard",
  authMiddleware,
  isHostMiddleware,
  userController.hostDashboard,
);

router.patch("/tooglersvp", authMiddleware, userController.toogleRSVP);
// router.get("/profile", authMiddleware, userController.profile);
export default router;
