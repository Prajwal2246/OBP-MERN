import express from "express";
import urlRoute from "./routes/urlRoute.js";
import connectDb from "./config/db.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/url", urlRoute);
await connectDb("mongodb://localhost:27017/urlshortner")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server is running: ${PORT}`));
