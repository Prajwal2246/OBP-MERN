/* http request
-> has pipes
-> get(get data),post(send),put(update),patch,delete (methods of http)
-> api call is http request
-> https request has parts
   1.url->location of server
   2.headers-> extra information
   3.body->data which is send/received
   4.status->
    200 succes
    400-missing 
    500-internal server
   5.statustext
*/

const imageEle = document.querySelector("img");
const ulEle = document.querySelector("ul");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    //async function
    console.log(res);
    // res.json(); body can read only once otherwise it gives error
    return res.json();
  })
  .then((res) => {
    if (res.status === "error") {
      throw new Error(res.message);
    }
    imageEle.src = res.message;
  })
  .catch((err) => {
    console.error(err);
  });
//fetch/async calls instantly

const dummyPost = {
  title: "this is a post post",
  userId: 7,
};

/* post request */
fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dummyPost),
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

function fetchProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log({ response });
      if (!response.title) {
        throw new Error(response.message);
      }
      const liChildEle = document.createElement("li");
      liChildEle.textContent = response.title;
      ulEle.appendChild(liChildEle);
    })
    .catch((error) => console.error(error));
}
fetchProduct(1);
fetchProduct(2);
fetchProduct(3);

const productsContainerDiv = document.querySelector(".products");

function displayProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log({ response });
      if (!response.title) {
        throw new Error(response.message);
      }
      const productDivEle = document.createElement("div");
      productDivEle.classList.add("product");
      productDivEle.innerHTML = `<h2>${response.title}</h2>
        <h3>${response.brand}</h3>
        <p>${response.description}</p>
        <span>${response.price}</span>
        <img src=${response.images[0]} alt="loading the image" />`;
      productsContainerDiv.appendChild(productDivEle);
    })
    .catch((error) => console.error(error));
}
displayProduct(1);
displayProduct(2);
displayProduct(3);
displayProduct(4);
