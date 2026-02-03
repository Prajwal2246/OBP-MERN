import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    question: "Which of these is a JavaScript framework?",
    options: ["Django", "Laravel", "React", "Flask"],
    correctAnswerIndex: 2,
  },
];

app.get("/health", (req, res) => {
  res.send({ health: "Healthy" });
});

app.get("/questions", (req, res) => {
  res.send(questions);
});

app.post("/addquestion", (req, res) => {
  let { question, options, correctAnswerIndex } = req.body;

  if (typeof options == "string") {
    options = options.split(",").map((opt) => opt.trim());
  }

  correctAnswerIndex = Number(correctAnswerIndex);
  const newQuestion = {
    id: questions.length + 1,
    question: question,
    options,
    correctAnswerIndex: correctAnswerIndex,
  };

  questions.push(newQuestion);
  res.status(201).json(newQuestion);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
