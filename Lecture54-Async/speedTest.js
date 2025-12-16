const timeBtn = document.querySelector("button");
const timerEle = document.querySelector("h2");
const textareaInput = document.querySelector("textarea");

let count = 60;
let timer = null; //here we store interval timer
let userTimeTaken = 0;

const paraEle = document.querySelector("p");

const spanContent = paraEle.textContent.trim();

paraEle.innerHTML = spanContent
  .split("")
  .map((char) => `<span>${char}</span>`)
  .join("");

const charSpans = paraEle.querySelectorAll("span"); //all chars in original para
textareaInput.disabled = true;

function startTimer() {
  count--;
  timerEle.textContent = `Time Left: ${count}`;

  if (count <= 0) {
    clearInterval(timer); //stop the interval
  }
}

timeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (timer !== null) return;

  textareaInput.disabled = false;
  textareaInput.focus();
  timer = setInterval(() => {
    //setInteval return a interger that is intervaltimer created by call
    startTimer();
    timeBtn.disabled = true;
    userTimeTaken++;
  }, 1000);
});

textareaInput.addEventListener("input", (e) => {
  const typedText = textareaInput.value;

  charSpans.forEach((char, index) => {
    if (index < typedText.length) {
      char.style.color =
        typedText[index] === spanContent[index] ? "green" : "red";
    } else {
      char.style.color = "black";
    }
  });

  if (textareaInput.value.trim() === spanContent) {
    clearInterval(timer);
    timer = null;
    textareaInput.disabled = true;
    calculateWPM();
  }
});

function calculateWPM() {
  const words = textareaInput.value.trim().split(/\s+/).length; //multiple spaces
  const minutes = userTimeTaken / 60;
  const wpm = Math.round(words / minutes);

  alert(`wpm is ${wpm}`);
}
