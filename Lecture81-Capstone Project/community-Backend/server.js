import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import communityRoute from "./routes/communityRoute.js";
import eventRoute from "./routes/eventRoute.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
connectDb();

app.use("/api/user", userRoute);
app.use("/api/community", communityRoute);
app.use("/api/event", eventRoute);

app.get("/", (req, res) => {
  res.send("Server is working");
});
app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
