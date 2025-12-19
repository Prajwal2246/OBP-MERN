/* callback
  these are the functions which are passed as an argument to exec at later stage
  these are executed at later stage after certain function/task has been done
 */

/* promises */
// const request = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = Math.random();
//     if (num < 0.5) {
//       resolve("Number is less than 0.5");
//     } else {
//       reject("number is greater than or equal to 0.5");
//     }
//   }, 1000);
// });

// console.log(request);
// request
//   .then((resolveMsg) => {
//     console.log({ resolveMsg });
//   })
//   .catch((rejectMsg) => {
//     console.log({ rejectMsg });
//   })
//   .finally(() => {
//     console.log("request is completed");
//   });

//promise is constructor function
/* state 0f promises 
  1.Pending
  2.resolve / fulfilled
  3.reject 
*/

const user = [
  {
    name: "prajwal",
    age: 22,
    stream: "IT",
  },
  {
    name: "rahul",
    age: 25,
    stream: "ENTC",
  },
  {
    name: "Ajay",
    age: 25,
    stream: "COMP",
  },
  {
    name: "Mike",
    age: 21,
    stream: "Civil",
  },
  {
    name: "Sargar",
    age: 23,
    stream: "IT",
  },
];

// const res = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomIndex = Math.floor(Math.random() * 10);
//     console.log(randomIndex);
//     if (user[randomIndex]) {
//       resolve(user[randomIndex]);
//     } else {
//       reject("User not found");
//     }
//   }, 1000);
// });

// res
//   .then((resolveObj) => {
//     console.log(resolveObj);
//   })
//   .catch((rejectMsg) => {
//     console.log({ rejectMsg });
//   })
//   .finally(() => {
//     console.log("done");
//   });

/* coding the actual callback hell */

const instagramUser = [
  {
    userId: 0,
    posts: [
      {
        captions: "i'm don",
        imageUrl: "#",
        comments: ["ghante ka don", "🔥🔥", "chota don😂"],
      },
    ],
  },
  {
    userId: 1,
    posts: [
      {
        captions: "i'm don",
        imageUrl: "#",
        comments: ["**donkey", "nice photo dear", "don't post 😂"],
      },
    ],
  },
];

// function fetchUser(userId, callback) {
//   setTimeout(() => {
//     if (userId >= instagramUser.length) {
//       callback("invalid userId", null);
//     } else {
//       callback(null, instagramUser[userId]);
//     }
//   }, 1000);
// }

// function fetchPosts(user, callback) {
//   setTimeout(() => {
//     if (!user?.posts?.length) {
//       callback("no posts by the user");
//     } else {
//       callback(null, user.posts[0]);
//     }
//   }, 1000);
// }

// function fetchComments(post, callback) {
//   setTimeout(() => {
//     if (post?.comments?.length) callback(null, post.comments);
//     else callback("post has not comments");
//   }, 1000);
// }

// function giveRandomNumber(high) {
//   return Math.floor(Math.random() * high);
// }

// fetchUser(giveRandomNumber(instagramUser.length), (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   fetchPosts(data, (error, data) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     fetchComments(data, (error) => {
//       if (error) {
//         console.error(error);
//         return;
//       }
//       console.log(data.comments);
//     });
//   });
// });

/* coding same with promises */

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (instagramUser[userId]) {
        resolve(instagramUser[userId]);
      } else {
        reject("User not found");
        return;
      }
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.posts?.length) {
        resolve(user.posts[0]);
      } else {
        reject("No posts");
        return;
      }
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post?.comments?.length) {
        resolve(post.comments);
      } else {
        reject("No comments on this post");
        return;
      }
    }, 1000);
  });
}

let randomIndex = Math.floor(Math.random() * instagramUser.length * 2);

// fetchUser(randomIndex)
//   .then(fetchPosts)
//   .then(fetchComments)
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("done");
//   });

/* .then implicituly convert anything into  promise and then move forward  */

/* product db me product hona chahiye
    2.quantity
    3.cart me hai ya nhi

    4.agar hai to cart me add aur print
   */

let products = [
  {
    id: 0,
    name: "toothpaste",
    qty: 12,
  },
  {
    id: 1,
    name: "brush",
    qty: 10,
  },
  {
    id: 2,
    name: "detergent",
    qty: 5,
  },
];

let cart = [];

function fetchProducts(productId) {
  return new Promise((resolve, reject) => {
    if (products[productId]) {
      resolve(products[productId]);
    } else {
      reject("no product with this product id");
    }
  });
}

function isProductAvalable(prod) {
  return new Promise((resolve, reject) => {
    if (prod.qty > 0) {
      resolve(prod);
    } else {
      reject("product qty is less than 0");
    }
  });
}

function isPorductInCart(prod) {
  return new Promise((resolve, reject) => {
    if (cart.includes(prod)) {
      reject("already in cart");
    } else {
      resolve(prod)
    }
  });
}

let randomIdx = Math.floor(Math.random() * products.length * 2);
console.log(randomIdx);

fetchProducts(randomIdx)
  .then(isProductAvalable)
  .then(isPorductInCart)
  .then((resolve) => {
    cart.push(resolve);
    console.log(cart);
    
  })
  .catch((err) => {
    console.log(err);
  });

/*hw
   promise.all
    promise.race
   */
