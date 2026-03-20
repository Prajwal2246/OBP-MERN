import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs.js";
import applications from "./routes/applications.js";

dotenv.config();

const app = express();

const PORT = 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("job portal working fine");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applications);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log("running on port", PORT);
    });
  })
  .catch((err) => {
    console.error({ msg: "error while connection", err: err });
  });
