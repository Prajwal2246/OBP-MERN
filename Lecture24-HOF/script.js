/* HOF */

/* 4.reduce 
-> reduce to one elment

*/
let arr = [2, 5, 3, 10, 34];

function sumofArr(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(sumofArr(arr));

//using reduce
let sum = arr.reduce((acc, val, ind, arr) => {
  acc += val;
  return acc;
}, 0);
console.log(sum);

//find the count of even numbers
let count = arr.reduce((acc, val) => {
  acc += val % 2 === 0;
  return acc;
}, 0);
console.log(count);

//find the freq of each elements

let fruits = ["apple", "guava", "kiwi", "guava", "kiwi", "Apple", "Guava"];

function freq(arr) {
  let obj = {};
  //   for (let i of arr) {
  //     if (obj[i]) {
  //       obj[i]++;
  //     } else {
  //       obj[i] = 1;
  //     }
  //   }
  for (let i of arr) {
    obj[i.toLowerCase()] = (obj[i.toLowerCase()] || 0) + 1;
  }
  return obj;
}

console.log(freq(fruits));

let obj = fruits.reduce((acc, val, ind, arr) => {
  acc[val.toLowerCase()] = (acc[val.toLowerCase()] || 0) + 1;
  return acc;
}, {});

console.log(obj);

/* 5. find() 
 -> return a value
 -> returns the  first element  that satisfies the condition
*/

let findKiwi = fruits.find((val, ind, arr) => val.toLowerCase() === "kiwi");
console.log(findKiwi);

/* fiven array of object,console.log first user aged above30 */
const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 30, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
  { name: "Diana", age: 28, isActive: false },
  { name: "Ethan", age: 35, isActive: true },
];

let named = users.find((user) => user.age > 30);
console.log(named.name);

/* print the name and age of each user */
users.forEach((val) => {
  console.log(val.name + " " + val.age);
});

/* function to create an arraya of names from above users */
namesArr = users.map((user) => user.name);
console.log(namesArr);

/* function to display all the active users from above array */
let ans = users.filter((user) => user.isActive);
console.log(ans);

/* function to find the sum of age for all users below 30 */
let sumofAgeBelow = users.reduce((acc, val) => {
  if (val.age < 30) {
    acc += val.age;
  }
  return acc;
}, 0);
console.log(sumofAgeBelow);

/* function to get the names of all active users */
let names = users
  .filter((user) => user.isActive == true)
  .map((user) => user.name);
console.log(names);

/* passing a function as argument and returning a function */
function calculator(a, b, operation) {
  return operation(a, b);
}

function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

let add34 = calculator(3, 4, add);
console.log(add34);

/* -------------------------------------- error handling --------------------------------------
-> not for synatx error
-> it checks only for runtime error
-> error if we get we have error as object is has multiple properties
*/

try {
  console.log(student);
  let student = "pratik";
  console.log(student);
} catch (error) {
  console.log(error.stack);
  console.log(error.name);
  console.log(error.message);
}

console.log("after try catch block");

/* 
 once-> restricts 
*/
