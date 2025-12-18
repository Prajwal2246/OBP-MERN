class Questions {
  constructor() {
    this.oeprators = ["+", "-", "%", "/", "*", "^"];
    this.op1 = this.random(100);
    this.op2 = this.random(100);
    this.operand = this.oeprators[this.random(6) - 1];
    this.score = this.random(50);
    this.correctAns = this.calculateCorrectAns();
  }
  random(high) {
    return 1 + Math.floor(Math.random() * high);
  }
  display() {
    //next question
    return `${this.op1} ${this.operand} ${this.op2}`;
  }
  calculateCorrectAns() {
    switch (this.operand) {
      case "+":
        return this.op1 + this.op2;

      case "-":
        return this.op1 - this.op2;

      case "*":
        return this.op1 * this.op2;

      case "/":
        return Math.floor(this.op1 / this.op2);

      case "^":
        return this.op1 ** this.op2;

      case "%":
        return this.op1 % this.op2;

      default:
        return "invalid input";
    }
  }

  validateAns(ans) {
    return this.correctAns === ans ? this.score : 0;
  }
}

class Quiz {
  constructor() {
    this.question = new Questions();
    this.userResponse = {};
    this.duration = this.question.random(60);
    this.questionCount = 1;
    this.score = 0;
    
  }

  displayCurrentQuestion() {
    return this.question.display();
  }
  nextQuestion(currQuestionAns) {
    this.score += this.question.validateAns(currQuestionAns);
    this.question = new Questions();
    this.displayCurrentQuestion();
  }
  getScore() {
    return this.score;
  }
  startTimer() {
    const timerElement = document.querySelector(".timer");
    let remainingTime = this.duration * 60;

    this.timer = setInterval(()=>{
        remainingTime--;
        const hr = String(Math.floor(remainingTime/3600)).padStart(2,"0");
        const min = String(Math.floor((remainingTime/60)%60)).padStart(2,"0");
        const sec = String(Math.floor(remainingTime%60)).padStart(2,"0");

        timerElement.textContent = ` ${hr}:${min}:${sec}`

        if(remainingTime < 0){
            clearInterval(this.timer);
            alert("quiz submited");
        }
    },1000)
    
  }
}

const quiz1 = new Quiz();
quiz1.startTimer();
const questionEle = document.querySelector("h2");
questionEle.textContent = quiz1.displayCurrentQuestion();

const userInput = document.querySelector("input");


userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const userAns = Number(userInput.value);

    quiz1.nextQuestion(userAns);

    questionEle.textContent = quiz1.displayCurrentQuestion();
    userInput.value = "";

    const scoreElem = document.querySelector("p");
    scoreElem.textContent = quiz1.getScore();
  }
});
