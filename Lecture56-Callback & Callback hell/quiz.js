const questionsData = [
  {
    statemenet: "What is captial of India?",
    marks: 10,
    time: 10,
    options: ["New Delhi", "Punjab", "Noida", "Calcutta"],
    correctOption: 0,
  },
  {
    statemenet: "What is captial of US?",
    marks: 20,
    time: 50,
    options: ["Delhi", "Kolkata", "Washington", "Noida"],
    correctOption: 2,
  },
];

const qBox = document.getElementById("q-box");
const aBox = document.getElementById("a-box");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("next");
let intervalId = null;

class Question {
  constructor(statement, marks, time) {
    this.statement = statement;
    this.marks = marks;
    this.time = time;
  }

  validate() {}
  display() {}
  startTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    let timeLeft = this.time;

    intervalId = setInterval(() => {
      timeLeft--;
      const min = Math.floor(timeLeft / 60);
      const sec = timeLeft % 60;

      timer.textContent = `${min < 10 ? "0" : " "}${min}:${
        sec < 10 ? "0" : ""
      }${sec}`;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        nextBtn.click();
      }
    }, 1000);
  }
}

class McqQuestions extends Question {
  constructor(statement, marks, time, options, correctOption) {
    super(statement, marks, time);
    this.options = options;
    this.correctOption = correctOption;
    this.userAnswer = null;
  }

  validate() {
    return this.userAnswer === this.correctOption;
  }
  display() {
    qBox.innerText = this.statement;
    aBox.innerHTML = "";

    this.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;

      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.userAnswer = index;
      });
      aBox.appendChild(button);
    });

    this.startTimer();
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    let totalScore = 0;
  }
  start() {
    this.questions[this.currentQuestionIndex].display();
  }
  nextQuestion() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.validate()) {
      this.score += currentQuestion.marks;
    }

    this.currentQuestionIndex++;

    if (this.questions.length - 1 === this.currentQuestionIndex) {
      nextBtn.textContent = "Submit";
    }
    this.questions[this.currentQuestionIndex].display();
  }

  isFinished() {
    let currentQuestion = this.questions[this.currentQuestionIndex];
    if(currentQuestion.validate()){
        this.score += currentQuestion.marks;
    }
    if (this.questions.length - 1 === this.currentQuestionIndex) {
      return true;
    }

    return false;
  }
}

const questions = questionsData.map((q) => {
  const mcqQ = new McqQuestions(
    q.statemenet,
    q.marks,
    q.time,
    q.options,
    q.correctOption
  );
  return mcqQ;
});

const quiz = new Quiz(questions);
quiz.start();

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (quiz.isFinished()) {
    alert("quiz is finished"+quiz.score);
    return;
  }

  quiz.nextQuestion();
});
