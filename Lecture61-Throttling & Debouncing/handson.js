/* throttling:
 -> so there are some events which triggers very much frequently like 
 scroll,mousemove,keydown,resize
 and if we have listners on this and there is some changes we do
 on this event triggers so due to large calling of these events our server may lag/down
 so to prevent this we use throttling.

 ->Defn: we are limiting the function call not the event listener for certain amouint of time
 */

function handleScroll() {
  console.log("scrolling");
}

/* 2 ways we can apply throttling
1.using global variable
2.using clousures(preffered) */

/* using global variable */
// let isAllowed = true;
// function throotling(delay) {
//   if (!isAllowed) return;
//   handleScroll();
//   isAllowed = false;
//   setTimeout(() => {
//     isAllowed = true;
//   }, delay);
// }
// window.addEventListener("scrool", () => {
//   throotling(1000);
// });

/* using closures */
function throotling(fn, delay) {
  let isAllowed = true;
  return function () {
    if (!isAllowed) return;
    fn();
    isAllowed = false;
    setTimeout(() => {
      isAllowed = true;
    }, delay);
  };
}

const throttledScroll = throotling(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);

/* Debouncing: 
 -> auto save is best example of debouncing 
 -> debouncimng occurs when user stops the activity for certain amount of time
 -> while throttling occurs at every event triggers but at certain delay
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
function saveinput(value) {
  console.log(value);
}

debounceSaveInput = debounce(saveinput, 2000);
input.addEventListener("input", () => {
  debounceSaveInput(input.value);
});
