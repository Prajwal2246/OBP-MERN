/* question1: 
Ashish is working on a JavaScript project where he needs to display the message “Ashish is coding…” repeatedly every few seconds. However, after running for 10 seconds, the message should automatically stop. Additionally, Ashish wants to provide a way to manually stop the message before the 10 seconds are up by clicking a button. Write a JavaScript function to achieve this behavior. A button reference (stopButton) is already available in the code. Attach an event to this button to stop the process manually before 10 seconds if needed.*/

let timerId = null;

function stopTimer() {
  if (timerId != null) clearInterval(timerId);
}

function startTimer() {
  timerId = setInterval(() => {
    console.log("Ashish is coding…");
  }, 1000);

  setTimeout(() => {
    stopTimer();
  }, 10000);
}

button = document.querySelector("button");
button.addEventListener("click", () => {
  stopTimer();
});

startTimer();

/* question2:
Shalu is developing a JavaScript application that performs a series of dependent tasks one after another. However, her current implementation results in callback hell, making the code difficult to read and maintain.

Below is Shalu’s current code:

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}

// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed!");
            });
        });
    });
});
Your Task: Refactor this callback-based code into a Promise-based implementation. Ensure that each step executes sequentially, just like the original code. The final message "All steps completed!" should appear at the end. */

function execstep1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function execstep2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step  2 completed");
      resolve();
    }, 1000);
  });
}

function execstep3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

function execstep4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 4 completed");
      resolve();
    }, 1000);
  });
}

execstep1()
  .then(execstep2)
  .then(execstep3)
  .then(execstep4)
  .then(() => {
    console.log("all steps done");
  });

/* question3:
Problem Title: Real-Time Search App with Modular Code and Throttling
Problem Statement:
You need to build a real-time product search web app using the Fake Store API.

📦 
API Endpoint:
https://fakestoreapi.com/products
This returns a list of product objects. Example:

[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95
  },
  ...
]
✅ 
Requirements:
Create a simple web page with:
A search input
A reset button
A result section
As the user types in the search input:
Use Axios to call the API
Filter the products by title (case-insensitive)
Show only the matched results (title, price)
Apply either throttling or debouncing to optimize the input handling:
Implement the logic in a separate utility function
Use the technique properly to reduce redundant API calls
Display a “Loading…” message while data is being fetched.
Create a reset button that:
Clears the search input
Clears the displayed results
Organize your code using ES Modules:
api.js → contains Axios logic
utils.js → contains debounce/throttle logic
main.js → contains DOM interaction and control flow
Create a logging function or dynamic binding use case, and apply either:
call, bind, or apply meaningfully with it.
(e.g., bind a function to a custom object and invoke it.)
Use type="module" in your HTML to load your JavaScript files as ES Modules.  */
<body>
    <input type="text" placeholder="enter search"  id="inputbox"/>
    <button id="reset">Reset</button>
    <section id="result">
        //result section

    </section>


    <script type="module" src="/main.js"></script>
</body>


// api.js
import axios from "axios";
export async function  fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

//utils.js

export function debounce(fn,deˀlay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,args);
        }, delay);
    }
}

const logger = {
    prefix: "[search log]",
    log(message){
        console.log(`${this.prefix} ${message}`);
    }
};

//main.js
import {fetchProducts} from "./api.js"
import {debounce} from "./utils.js"

const input = document.getElementById("inputbox");
const resetBtn = document.getElementById("reset");
const results = document.getElementById("result");

