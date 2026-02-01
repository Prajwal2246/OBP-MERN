import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/api/hello",(req,res)=>{
    res.send("hello from backend");
})

app.listen(PORT, () => {
  console.log(`app running on PORT ${PORT}`);
});
