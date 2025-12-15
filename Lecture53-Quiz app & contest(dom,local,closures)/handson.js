class Questions {
  constructor({ id, text, options, correctOption, type }) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctOption = correctOption;
    this.type = type;
  }
}

const questions = [
  new Questions({
    id: 1,
    text: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctOption: 3,
    type: "mcq",
  }),

  new Questions({
    id: 2,
    text: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Styling Sheet",
      "Colorful Styling Syntax",
    ],
    correctOption: 0,
    type: "mcq",
  }),

  new Questions({
    id: 3,
    text: "Which HTML tag is used to link JavaScript?",
    options: ["link", "script", "js", "javascript"],
    correctOption: 2,
    type: "mcq",
  }),

  new Questions({
    id: 4,
    text: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "IBM"],
    correctOption: 2,
    type: "mcq",
  }),

  new Questions({
    id: 5,
    text: "Which method is used to print something in JS console?",
    options: ["print()", "console.print()", "log.console()", "console.log()"],
    correctOption: 3,
    type: "mcq",
  }),
];

class Quiz {
  constructor({ questions, duration }) {
    this.questions = questions;
    this.duration = duration;
    this.userResponse = {};
    this.score = 0;
    this.currentQuestionIndex = 0;
  }

  start() {
    this.startTimer();
    this.currentQuestion();
  }

  displayOptions(qIdx) {
    const questionOptions = this.questions[qIdx].options;
    const elementInDom = document.querySelector("ul");
    const selected = this.userResponse[qIdx];

    elementInDom.innerHTML = questionOptions
      .map((option, index) => {
        const isSelected =
          selected === index ? "bg-green-600 text-white" : "bg-white/10";
        return `
          <li data-option-idx="${index}" 
             class="option p-3 rounded-xl ${isSelected}
             backdrop-blur border border-white/20 hover:bg-green-700 cursor-pointer transition">
              ${option}
         </li>
        `;
      })
      .join("");
  }

  currentQuestion() {
    const idx = this.currentQuestionIndex;
    const questionTextElement = document.querySelector("p");
    questionTextElement.textContent = this.questions[idx].text;

    this.displayOptions(idx);
  }
  prevQuestions() {
    if (this.currentQuestionIndex === 0) {
      return;
    }
    if (this.currentQuestionIndex === this.questions.length - 1) {
      const submitBtn = document.querySelector(".buttons").lastElementChild;
      submitBtn.textContent = "Next";
    }

    this.currentQuestionIndex--;
    this.currentQuestion();
  }
  nextQuestion() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.submit();
      return;
    }
    if (this.currentQuestionIndex === this.questions.length - 2) {
      const nextBtn = document.querySelector(".buttons").lastElementChild;
      nextBtn.textContent = "submit";
    }
    this.currentQuestionIndex++;
    this.currentQuestion();
  }
  calculateScore() {
    this.score = 0;
    for (let qidx in this.userResponse) {
      const selected = this.userResponse[qidx];
      const correct = this.questions[qidx].correctOption;

      if (selected === correct) {
        this.score++;
      }
    }
  }
  captureUserResponse(userSelectedOptionIdx) {
    const qidx = this.currentQuestionIndex;
    this.userResponse[qidx] = userSelectedOptionIdx;
  }

  startTimer() {
    const timerElement = document.querySelector(".timer");
    let remianingTime = this.duration * 60; //min->sec

    this.timer = setInterval(() => {
      remianingTime--;
      const hr = String(Math.floor(remianingTime / 3600)).padStart(2, "0");
      const min = String(Math.floor((remianingTime / 60) % 60)).padStart(
        2,
        "0"
      );
      const sec = String(Math.floor(remianingTime % 60)).padStart(2, "0");

      timerElement.textContent = `${hr}:${min}:${sec}`;

      if (remianingTime < 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  submit() {
    this.calculateScore();
    clearInterval(this.timer);
    console.log(this.userResponse);
    console.log(this.score);
  }
}

const quiz = new Quiz({ questions, duration: 20 });
quiz.start();

const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];

options.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    const optIdx = parseInt(e.target.dataset.optionIdx);
    quiz.captureUserResponse(optIdx);
  }
});

prevButton.addEventListener("click", (e) => {
  quiz.prevQuestions();
});

nextButton.addEventListener("click", (e) => {
  quiz.nextQuestion();
});
