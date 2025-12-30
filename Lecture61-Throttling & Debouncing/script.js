/* throttling 
some event listeneers triggered very much frequently like(resizem,scroll,mousemove,keydown) 
and these events may make our server lag/down  so to solve this problem by adding some delay 
to the api calls/code which triggers oftenly 

this is called Throttling
-> we are limiting the function calls not the event listneer
*/

// -----------------------------------------//--------------------------

/* window.addEventListener("scroll", () => {
  console.log("scrolled");
}); */
function handleScroll() {
  console.log("scrolled");
}

/* throttling through global variable
let isAllowed = true;

function throttling(delay) {
  if (!isAllowed) return;
  handleScroll();
  isAllowed=false
  setTimeout(() => {
    isAllowed = true;
  }, delay);
}

window.addEventListener("scroll", () => {
  throttling(1000);
});
 */

/* throttling through closures */
// function throotle(fn, delay) {
//   let isAllowed = true;
//   return function () {
//     if (!isAllowed) return;
//     fn();
//     isAllowed = false;
//     setTimeout(() => {
//       isAllowed = true;
//     }, delay);
//   };
// }

// const throttledScroll = throotle(handleScroll, 1000);

// window.addEventListener("scroll", throttledScroll);

/* Debouncing
 - if we want to implement features like auto save so such features can be implemented using debouncing
 in which we wait for the user to stop for certain period of time/ some delay and after that we save the inputs of user.
 - Throotling  and debouncing are different as throotling triggers recursively for every event triggered but in debouncing we wait 
 for the some time in which no event triggering is happened and then we run the function which we want.
 */

/* timeline of debouncing
delay=3s;

below is the timeline when user has triggered the event
t=0 -> t=2 -> t=4 -> t=8 ->stops triggering at all

at t=7. and t=11 --function will be called
 */

/* flow of below is 
 -> at click event we call debounce which calls clicked function with 3sec 
    so this for the first time 
 
function clicked() {
  console.log("clicked");
}

function debouncing(fn, delay) {
  let timerId = null;

  clearTimeout(timerId);

  return function () {
    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
}

const debounce = debouncing(clicked, 3000);
window.addEventListener("click", debounce);
*/

const input = document.querySelector("input");

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function saveInput(value) {
  console.log(value);
}

debounceSaveInput = debounce(saveInput, 2000);

input.addEventListener("input", () => {
  debounceSaveInput(input.value);
});
