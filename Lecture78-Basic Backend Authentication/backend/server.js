import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { users, tokens } from "./db.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

/* API's */
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("email and password required");
    }

    /* hashing the password */
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log({ hashedPassword });

    const user = {
      email,
      password: hashedPassword,
    };
    users.push(user);
    res.json({ message: "User added successfully", user });
  } catch (error) {
    res.status(500).json({ msg: error.message || "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("email or password empty");
    }
    const user = users.find((u) => u.email == email);
    if (!user) {
      throw new Error("user not found");
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) throw new Error("incorrect password");

    const token = uuidv4();
    tokens.push({
      token,
      email,
    });

    res.status(200).json({ msg: "logged in succesfull", token: token });
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Internal Server Error", error: error });
  }
});

/* middlewares */
const verifyToken = (req, res, next) => {
  try {
    const authorisationHeader = req.headers.authorization;
    console.log({ authorisationHeader });

    if (!authorisationHeader) throw new Error("auth header missing!!");

    const authToken = authorisationHeader.split(" ")[1];
    const tokenObj = tokens.find((t) => t.token == authToken);
    if (!tokenObj) {
      throw new Error("Auth token invalid!!");
    }
    const user = users.find((user) => user.email === tokenObj.email);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

app.get("/profile", verifyToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

/* valid email will have atleast one character before @ and atleast one character before . and 2 chars after . and no special characters between @ and .
 hw: implement your own email validator

http is stateless thats why we need token which are required to check our request are authenticated or not
*/
