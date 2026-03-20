import { express, Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import Application from "../models/Application";

const router = Router();

router.post("/", verifyToken, async (req, res) => {
  if (req.user.role != "seeker") {
    return res.status(403).json({ message: "Only job seekers can apply" });
  }
  const { jobId, coverLetter } = req.body;
  const existing = await Application.findOne({
    job: jobId,
    appplicant: req.user.id,
  });
  if (existing) return res.status(400).json({ message: "Already applied" });

  const app = await Application.create({
    job: jobId,
    applicant: req.user.id,
    coverLetter,
  });
  res.status(201).json(app);
});

router.get("/mine",verifyToken,async (req,res)=>{
    const apps = await Application.find({applicant:req.user.id}).populate("job");
    res.json(apps);
}
)

export default router;
