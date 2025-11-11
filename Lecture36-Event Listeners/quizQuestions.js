const questions = [
  {
    title: "Lorem1 this is the first question. Answer it correctly?",
    option: [
      {
        option1: "This is first option of que1",
        option2: "This is second option of que1",
        option3: "This is third option of que1",
        option4: "This is fourth option of que1",
      },
    ],
    correctOpt: 2,
  },
  {
    title: "Lorem2 this is the second question. Answer it correctly?",
    option: [
      {
        option1: "This is first option of que2",
        option2: "This is second option of que2",
        option3: "This is third option of que2",
        option4: "This is fourth option of que2",
      },
    ],
    correctOpt: 2,
  },
  {
    title: "Lorem3 this is the third question. Answer it correctly?",
    option: [
      {
        option1: "This is first option of que3",
        option2: "This is second option of que3",
        option3: "This is third option of que3",
        option4: "This is fourth option of que3",
      },
    ],
    correctOpt: 2,
  },
  {
    title: "Lorem4 this is the fourth question. Answer it correctly?",
    option: [
      {
        option1: "This is first option of que4",
        option2: "This is second option of que4",
        option3: "This is third option of que4",
        option4: "This is fourth option of que4",
      },
    ],
    correctOpt: 2,
  },
];

let currQuesIndex = 0;
let score = 0;
const correctAnsScore = 4;
const wrongAnsScore = -1;

const questionSection = document.querySelector(".questions");

const questionTitle = document.querySelector(".question-title");

const options1 = document.querySelector(".option1");
const options2 = document.querySelector(".option2");
const options3 = document.querySelector(".option3");
const options4 = document.querySelector(".option4");

const nextBtn = document.querySelector(".next");
const scoreSection = document.querySelector(".score");

function changeScore(optionNumber) {
  if (questions[currQuesIndex].correctOpt === optionNumber) {
    score += correctAnsScore;
  } else {
    score += wrongAnsScore;
  }
}

function changeQuestion() {
  if (currQuesIndex === questions.length - 1) {
    questionSection.style.display="none";
    scoreSection.style.display="block";
    scoreSection.textContent="Your score " + score;
    return;
  }

  currQuesIndex++;
  const questionObj = questions[currQuesIndex];
  
  questionTitle.textContent = questionObj.title;
  options1.textContent = questionObj.option[0].option1;
  options2.textContent = questionObj.option[0].option2;
  options3.textContent = questionObj.option[0].option3;
  options4.textContent = questionObj.option[0].option4;
}
nextBtn.addEventListener("click", changeQuestion);

///seting event listener on when options are clicked
options1.addEventListener("click",()=>{
    changeScore(1);
    changeQuestion();
});

options2.addEventListener("click",()=>{
    changeScore(2);
    changeQuestion();
});
options3.addEventListener("click",()=>{
    changeScore(3);
    changeQuestion();
});
options4.addEventListener("click",()=>{
    changeScore(4);
    changeQuestion();
});
