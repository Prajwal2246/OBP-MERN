/* inputs for form */
const sessionNameInput = document.querySelector("#session-name");
const studyDurationInput = document.querySelector("#study-duration");
const breakInput = document.querySelector("#break-duration");
const studyCycleInput = document.querySelector("#study-cycle");
const historyBtn = document.querySelector("#history");
const historySection = document.querySelector("#history-section");
const historySessionName = document.querySelector("#name");
const historytime = document.querySelector("#time");
const historyCompletion = document.querySelector("#completion");

/* sections */
const formSection = document.querySelector("#session-form");
const dashboardSection = document.querySelector("#dashboard");

/* error inputs */
const sessionNameError = document.querySelector("#session-name-error");
const studyDurationError = document.querySelector("#study-duration-error");
const breakDurationError = document.querySelector("#break-duration-error");
const studyCycleError = document.querySelector("#study-cycle-error");

/* submit btn */
const SubmitBtn = document.querySelector("#submit");

/* flags */
let sessionNamevalidate = false;
let studyDurationvalidate = false;
let breakDurationvalidate = false;
let studyCycleValidate = false;

/* error validations */
function validateSessionName() {
  if (sessionNameInput.value.trim().length < 3) {
    sessionNameError.textContent =
      "Session name should be of atleast of length 3";
    sessionNamevalidate = false;
  } else {
    sessionNameError.textContent = "";
    sessionNamevalidate = true;
  }
}

function validateStudyDuration() {
  if (Number(studyDurationInput.value) < 1) {
    studyDurationError.textContent =
      "study duration  should be of atlest 5 minutes";
    studyDurationvalidate = false;
  } else {
    studyDurationError.textContent = "";
    studyDurationvalidate = true;
  }
}

function validateBreakDuration() {
  if (Number(breakInput.value) < 1 || Number(breakInput.value) > 20) {
    breakDurationError.textContent =
      "break duration should atleast 10 minutes ";
    breakDurationvalidate = false;
  } else {
    breakDurationError.textContent = "";
    breakDurationvalidate = true;
  }
}

function validatestudyCycle() {
  if (Number(studyCycleInput.value) < 1) {
    studyCycleError.textContent = "Study cycles should be atleast 1";
    studyCycleValidate = false;
  } else {
    studyCycleError.textContent = "";
    studyCycleValidate = true;
  }
}

function enableSubmitBtn() {
  SubmitBtn.disabled = !(
    sessionNamevalidate &&
    breakDurationvalidate &&
    studyDurationvalidate &&
    studyCycleValidate
  );
}

/* inputs events on form inputs */
sessionNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  validateSessionName();
  enableSubmitBtn();
});

studyDurationInput.addEventListener("input", (e) => {
  e.preventDefault();
  validateStudyDuration();
  enableSubmitBtn();
});

breakInput.addEventListener("input", (e) => {
  e.preventDefault();
  validateBreakDuration();
  enableSubmitBtn();
});
studyCycleInput.addEventListener("input", (e) => {
  e.preventDefault();
  validatestudyCycle();
  enableSubmitBtn();
});

SubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  formSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");

  startSession();
});

/* dashboard Section */
const app = {
  studyMinutes: 0,
  breakMinutes: 0,
  totalCycles: 0,
  currentCycle: 0,
  phase: "studying 🧑‍💻",
  timeLeft: 0,
  timerId: null,
  timeStamp: Date.now(),
};

/* elements of dashboard */
const currentPhaseInput = document.querySelector("#phase");
const timerInput = document.querySelector("#timer");
const cycleCountInput = document.querySelector("#cycle-tracker");
const phases = ["studying 🧑‍💻", "Break ☕", "Session Complete 🎉"];
const pauseBtn = document.querySelector("#pause");
const quoteDiv = document.querySelector("#quotes-div");
const quoteLoading = document.querySelector("#quote-loading");
const quoteP = document.querySelector("#quote");

function startSession() {
  app.studyMinutes = Number(studyDurationInput.value);
  app.breakMinutes = Number(breakInput.value);
  app.totalCycles = Number(studyCycleInput.value);

  app.currentCycle = 1;
  app.phase = "studying 🧑‍💻";
  app.timeLeft = app.studyMinutes * 60;

  updateDashboard();
  startTimer();
  autoSave();
  resetInactivity();
}

async function startTimer() {
  clearInterval(app.timerId);
  app.timerId = setInterval(() => {
    if (app.timeLeft > 0) {
      app.timeLeft--;
    } else {
      handlePhaseEnd();
    }
    updateDashboard();
  }, 1000);

  try {
    const res = await fetchquote();
    // console.log(res.quote);
    updateQuote(res.quote);
  } catch (error) {
    console.log(error);
  }
}

function updateDashboard() {
  currentPhaseInput.textContent = `Current Phase: ${app.phase}`;
  timerInput.textContent = `Timer:${getTime(app.timeLeft)}`;
  cycleCountInput.textContent = `Current Study Cycle: ${app.currentCycle} of ${app.totalCycles}`;
}

async function handlePhaseEnd() {
  if (
    app.phase.includes("studying 🧑‍💻") &&
    app.currentCycle === app.totalCycles
  ) {
    app.phase = "Session Complete 🎉";
    clearInterval(app.timerId);
    app.timeLeft = 0;
    clearAutoSave();
    saveHistory();
    return;
  } else if (app.phase.includes("studying 🧑‍💻")) {
    app.phase = "Break";
    currentPhaseInput.textContent = "Break ☕";
    app.timeLeft = app.breakMinutes * 60;
    quoteP.classList.add("hidden");
  } else if (app.phase.includes("Break")) {
    if (app.currentCycle < app.totalCycles) {
      app.currentCycle++;
      app.phase = "studying 🧑‍💻";
      app.timeLeft = app.studyMinutes * 60;
      currentPhaseInput.textContent = "studying 🧑‍💻";
      quoteP.classList.remove("hidden");
      quoteP.textContent = "";
      try {
        const res = await fetchquote();
        // console.log(res.quote);
        updateQuote(res.quote);
      } catch (error) {
        console.log(error);
      }
    } else {
      app.phase = "Session Complete 🎉";
      clearInterval(app.timerId);
      app.timeLeft = 0;
      clearAutoSave();
      updateDashboard();
      saveHistory();
    }
  }
}

function getTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

pauseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const session = JSON.parse(localStorage.getItem("sessions"));

  if (pauseBtn.textContent === "Resume") {
    pauseBtn.textContent = "Pause";
    session.timeLeft = app.timeLeft;
    startTimer();
    resetInactivity();
  } else {
    pauseBtn.textContent = "Resume";
    session.timeLeft = app.timeLeft;
    clearInterval(app.timerId);
    localStorage.setItem("paused_time", app.timeLeft);
  }
});

async function fetchquote() {
  const res = await fetch(
    "https://random-quotes-freeapi.vercel.app/api/random"
  );

  if (!res.ok) throw new Error();
  const data = await res.json();
  return data;
}

function updateQuote(quote) {
  quoteLoading.classList.add("hidden");
  quoteP.textContent = quote;
}

let autoSaveId = null;
function autoSave() {
  clearInterval(autoSaveId);

  autoSaveId = setInterval(() => {
    if (app.phase === "Session Complete 🎉") {
      clearInterval(autoSaveId);
    }
    const session = {
      sessionName: sessionNameInput.value,
      studyMinutes: app.studyMinutes,
      breakMinutes: app.breakMinutes,
      totalCycles: app.totalCycles,
      currentCycle: app.currentCycle,
      phase: app.phase,
      timeLeft: app.timeLeft,
      timerId: app.timerId,
      timeStamp: Date.now(),
    };
    localStorage.setItem("sessions", JSON.stringify(session));
  }, 10000);
}

function clearAutoSave() {
  clearInterval(autoSaveId);
  autoSaveId = null;

  localStorage.removeItem("sessions");
}

function restoreSession() {
  const sessionExist = JSON.parse(localStorage.getItem("sessions"));
  if (!sessionExist) return;

  app.studyMinutes = sessionExist.studyMinutes;
  app.breakMinutes = sessionExist.breakMinutes;
  app.totalCycles = sessionExist.totalCycles;
  app.currentCycle = sessionExist.currentCycle;
  app.phase = sessionExist.phase;
  app.timeLeft = sessionExist.timeLeft;
  app.timeStamp = sessionExist.timeStamp;

  if (app.phase === "studying 🧑‍💻") {
    startTimer();
    pauseBtn.textContent = "Paused";
  } else {
    stopTimer(app.timerId);
    pauseBtn.textContent = "Resume";
  }
  displayDashboard();
  updateDashboard();
  autoSave();
}

window.addEventListener("load", () => {
  restoreSession();
});

function displayDashboard() {
  formSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");
}

function stopTimer(id) {
  clearInterval(id);
}

function saveHistory() {
  const history = JSON.parse(localStorage.getItem("session-History")) || [];

  const totalStudyTime = app.studyMinutes * app.totalCycles;

  const session = {
    name: sessionNameInput.value || `Session ${history.length + 1}`,
    totalStudyTime: totalStudyTime,
    completionStatus: "Completed",
  };

  history.push(session);
  localStorage.setItem("session-History", JSON.stringify(history));
}

historyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const sessionhistory = JSON.parse(localStorage.getItem("session-History"));
  if (!sessionhistory) {
    alert("No history to show");
    return;
  } else {
    historySection.classList.remove("hidden");
    console.log(sessionhistory);
    sessionhistory.forEach((session) => {
      const sessionnameEle = document.createElement("p");
      const totalStudyTime = document.createElement("p");
      const CompletionStatus = document.createElement("p");

      sessionnameEle.textContent = `Session Name : ${session.name}`;
      totalStudyTime.textContent = `Total Study Time: ${session.totalStudyTime}`;
      CompletionStatus.textContent = "Completion Status: Completed";

      historySection.appendChild(sessionnameEle);
      historySection.appendChild(totalStudyTime);
      historySection.appendChild(CompletionStatus);
      historySection.appendChild(document.createElement("hr"));
    });
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pause("tab switched or browser switched");
  }
});



function pause(reason) {
  if (!app.timerId || app.phase === "Session Complete 🎉") return;

  clearInterval(app.timerId);
  app.timerId = null;

  clearInterval(autoSaveId); // 🔥 important

  pauseBtn.textContent = "Resume";
  localStorage.setItem("paused_time", app.timeLeft);

  console.log("Auto paused:", reason);
}

let inactivityTimerId;
const inactivityTime = 60 * 1000; //1min
function resetInactivity() {
  clearTimeout(inactivityTimerId);
  inactivityTimerId = setTimeout(() => {
    pause("User inactive");
  }, inactivityTime);
}

["mousedown", "keydown"].forEach((event) => {
  document.addEventListener(event, resetInactivity);
});
