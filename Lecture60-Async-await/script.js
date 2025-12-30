async function fetchOneTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("unale to fetch");
    }
    const data = await response.json();
    return {
      data: data,
      error: null,
    };
  } catch (err) {
    console.error(err);
    return {
      error: err,
      data: null,
    };
  }
}

async function convertResponseToJson(response) {
  return await response.json();
}

async function fetchProduct(productId) {
  try {
    if (typeof productId !== "number") {
      throw new Error("invalid propduct id");
    }

    const todoResonse = await fetchOneTodo();
    if (todoResonse.data) {
      console.log("todoResponse", todoResonse.data);
    }

    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ); //return promise

    if (!response.ok) {
      throw new Error("failed to fetch product details");
    }
    console.log({ response });

    const data = await convertResponseToJson(response);

    if (!data) {
      throw new Error("unable to parse data");
    }

    console.log({ data });
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}
console.log("start");
fetchProduct(8); //async function
console.log("end");
/* start
end
then run fetchProduct()
 */

//error propagation

function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 1000ms");
    });
  });
}

function f2() {
  return fetch(`https://fakestoreapi.com/products/1`);
}

async function f3() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").json();
}

/* call one by one */
async function funcCallWithAsyncAwait() {
  try {
    let f1Response = await f1();
    let f2Response = await f2();
    let f3Response = await f3();
    console.log({ f1Response, f2Response, f3Response });
  } catch (err) {
    console.error(err);
  }
}

/* call simulatenously */
async function funcCallWithPromises() {
  const allresponse = await Promise.allSettled([f1(), f2(), f3()]);
  console.log({ allresponse });
}

funcCallWithAsyncAwait();
funcCallWithPromises();
