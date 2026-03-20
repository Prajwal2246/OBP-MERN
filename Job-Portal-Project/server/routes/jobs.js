import express, { Router } from "express";
import Job from "../models/job.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); //newest first
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", verifyToken, async (req, res) => {
  if (req.user.role != "employer") {
    return res.status(403).json({ message: "Only employees can post jobs" });
  }
  const { title, company, location, salary, description, type } = req.body;
  try {
    const job = await Job.create({
      title,
      company,
      location,
      salary,
      description,
      type,
      postedBy: req.user._id,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

export default router;
