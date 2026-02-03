import { useState } from "react";
import axios from "axios";

function App() {
  const [quizQuestions, setQuizQuestion] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");
  const [correctOptIdx, setCorrectOptIdx] = useState("");

  const SERVER_PORT = "http://localhost:3000";

  async function startquiz() {
    try {
      const res = await axios.get(`${SERVER_PORT}/questions`);
      setQuizQuestion(res.data);
      setCurrentQuestionIdx(0);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleForm(e) {
    e.preventDefault();
    try {
      const newQuiz = {
        question,
        options: option,
        correctAnswerIndex: Number(correctOptIdx),
      };
      const res = await axios.post(`${SERVER_PORT}/addquestion`, newQuiz);
      console.log("Question added:", res.data);

      setQuestion("");
      setOption("");
      setCorrectOptIdx("");
      const que = await axios.get(`${SERVER_PORT}/questions`);
      setQuizQuestion(que.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button onClick={startquiz}>Start Quiz</button>

      {quizQuestions ? (
        <div>
          <h3>Quiz</h3>
          {currentQuestionIdx < quizQuestions.length ? (
            <div>
              <p>
                {quizQuestions[currentQuestionIdx].id}{" "}
                {quizQuestions[currentQuestionIdx].question}
              </p>

              {quizQuestions[currentQuestionIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (
                      idx ===
                      quizQuestions[currentQuestionIdx].correctAnswerIndex
                    ) {
                      setScore((prev) => prev + 1);
                    }
                    setCurrentQuestionIdx((prev) => prev + 1);
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <p>
              Quiz ended 🎉 Your score: {score} / {quizQuestions.length}
            </p>
          )}
        </div>
      ) : (
        "click on button to start quiz"
      )}

      <h3>add quiz question</h3>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="options"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <input
          type="text"
          placeholder="correct opt number"
          value={correctOptIdx}
          onChange={(e) => setCorrectOptIdx(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
