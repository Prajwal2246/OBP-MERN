/* 
-> promise.all([p1,p2,p3])
-> promise.race([p1,p2,p3])
-> promise.any([p1,p2,p3])
-> promise.allSettled([p1,p2,p3])
 */

function f1() {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => {
        console.log("fakestore APi", response);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}
function f2() {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => {
        if (!response.ok) reject("failed to call the api");
        console.log("dummy api", response);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

// Promise.all([f1(), f2()])
//   .then((response) => console.log("Promise.all()", response))
//   .catch((error) => console.log("Promise.all()", error));

function f3() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}
const f4 = Promise.reject("dummy reject");
const f5 = Promise.reject("dummy reject");
const f6 = Promise.reject("dummy reject");
const f7 = Promise.reject("dummy reject");
const f8 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved after 5sec delay");
  }, 5000);
});

// Promise.race([f1(), f2(), f3(), f4])
//   .then((response) => {
//     console.log("Pormise.race()", response);
//   })
//   .catch((err) => console.log(err));

/* only resolve */
// Promise.any([f1(), f2(), f3(), f4]);
//   .then((response) => {
//   console.log("Pormise.any()", response);
// })
// .catch((err) => console.log(err));

// Promise.any([f4, f5, f6, f7])
//   .then((response) => {
//     console.log("Pormise.any()", response);
//   })
//   .catch((err) => console.log(err));

const fulfilled = [];
const rejected = [];

/* resolve/reject doni array mdhe dete */
Promise.allSettled([f1(), f2(), f3(), f4, f5, f6, f7, f8])
  .then((results) => {
    console.log("Pormise.allSettled()", results);

    results.forEach((result) => {
      if (result.status === "fulfilled") fulfilled.push(result.value);
      else rejected.push(result.reason);
    });
  })
  .finally(() => {
    console.log({ fulfilled });
    console.log({ rejected });
  });
