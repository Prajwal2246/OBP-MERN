import urlController from "../controller/urlController.js";
import express from "express";

const router = express.Router();

router.post("/", urlController.generateShortUrl);
router.get("/:shortId",urlController.redirect)

export default router;
