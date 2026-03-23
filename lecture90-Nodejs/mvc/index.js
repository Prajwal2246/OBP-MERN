import express from "express";
import connectDb from "./config/connectdb.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import communityRoute from "./routes/communityRoute.js";

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;

//db connection
const MONGO_URI = process.env.MONGO_CONNECTION_STRING;
connectDb(MONGO_URI);

app.use("/users", userRoute);
app.use("/communities", communityRoute);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
