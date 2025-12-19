const id = setInterval(() => {
  const date = new Date();
  let diff = Date.now() - date;
  while (diff < 1000) {
    // console.log(diff);
    diff = Date.now() - date;
  }
  console.log("task completed");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 2000);

function setIntervalUsingSetTimeout() {
  //tasks
  const date = new Date();
  let diff = Date.now() - date;
  while (diff < 1000) {
    // console.log(diff);
    diff = Date.now() - date;
  }
  console.log("task completed");

  setTimeout(setIntervalUsingSetTimeout, 1000);
}

function saveFormData(callback) {
  //callback hell
  //   //saving all personal details
  //   setTimeout(() => {
  //     //code to save all educational detials
  //     setTimeout(() => {
  //       //code to save all work experience
  //       //submit the form
  //     }, 1000);
  //   }, 1000);

  /* soltution of callback hell */
  savePersonalDetails();
}

function callbackFn() {}
saveFormData(callbackFn);

//managing callback to prevent callback hell (the pyramid of doom)

function savePersonalDetails() {
  //saving all personal details
  setTimeout(saveEducationDetails, 1000);
}

function saveEducationDetails() {
  //code to save all educational detials
  setTimeout(saveWorkDetails, 1000);
}

function saveWorkDetails() {
  //save work exp
  //return
}

/* callback as error handling function */
function callbackAsErrorHandler(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

function fetchUser() {
  return {
    id: 1,
    name: "Prajwal",
  };
}

function displayUser(errorCallbackFn) {
  setTimeout(() => {
    const userDetails = fetchUser();

    if (userDetails) {
      errorCallbackFn(null, userDetails);
    } else {
      errorCallbackFn("unable to fetch user", null);
    }
  }, 1000);
}

displayUser(callbackAsErrorHandler);
