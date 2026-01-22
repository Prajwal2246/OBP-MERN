import React from "react";
import { useState } from "react";
import Question from "./Question";
import Score from "./Score";

function Quiz() {
  let [currIdx, setCurrIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: "Which language is primarily used for web development?",
      qidx: 0,
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswerIndex: 1,
    },
    {
      question: "What does CSS stand for?",
      qidx: 1,
      options: [
        "Computer Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which React hook is used to manage state?",
      qidx: 2,
      options: ["useEffect", "useRef", "useState", "useMemo"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which HTTP method is used to fetch data?",
      qidx: 3,
      options: ["POST", "PUT", "GET", "DELETE"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      qidx: 4,
      options: ["String", "Number", "Boolean", "Character"],
      correctAnswerIndex: 3,
    },
  ];

  function handleNext() {
    if (currIdx === quizData.length - 1) {
      setShowScore(true);
      return;
    } else {
      setCurrIdx((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (currIdx > 0) {
      setCurrIdx((prev) => prev - 1);
    }
  }

  const currentQuestion = quizData[currIdx];

  return (
    <div>
      {showScore ? (
        <Score score={score} />
      ) : (
        <>
          <Question currQue={currentQuestion} setScore={setScore} />
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
