// autosave -> debouncing
const input = document.querySelector("input");
const savedInputVal = localStorage.getItem("input_value");
input.value = savedInputVal;

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function savetoLocal(val) {
  localStorage.setItem("input_value", val);
}

const autoSaveToLocalStorage = debounce(savetoLocal, 2000);

input.addEventListener("input", (e) => {
  autoSaveToLocalStorage(e.target.value);
});
