const btnEle = document.querySelector("button");
const spanEle = document.querySelector("span");

btnEle.addEventListener("click", (e) => {
  //async
  e.preventDefault();
  spanEle.textContent = "Welcome to class";

  setTimeout(() => {
    //agar kuch time ke baad execute krna ho tb settiemOut use krte h
    spanEle.remove();
  }, 1000);
});

console.log("hello"); //non blocked
// alert("alert") //blocked
console.log("world"); //after blocked over

// const stopBtn = document.querySelector("button:nth-of-type(2)");
const stopBtn = document.querySelector("button:last-of-type");
const startBtn = document.querySelector("button:nth-of-type(2)");
const h1Ele = document.querySelector("h1");

let count = 0;
let timer = null;

startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    count++;
    h1Ele.textContent = count;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    console.log(timer);
  clearInterval(timer);
});
