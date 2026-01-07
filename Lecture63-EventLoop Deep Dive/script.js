// console.log("start");
// const obj = new Promise((resolve, reject) => {
//   console.log("inside promise");
//   setTimeout(() => {
//     resolve("we're done");
//   }, 0);
// });
// obj.then((msg) => {
//   console.log(msg);
// });
// console.log("end");

/* start
   inside promise (The executor function of a Promise runs synchronously, immediately when the Promise is created.)
   end
   we're done
*/

/* web api 

“When JavaScript encounters an async operation, 
it delegates it to the Web API.
Once completed, the callback is queued as a microtask or macrotask.
The event loop executes microtasks first when the call stack becomes empty,
followed by macrotasks.”

finally also in microtask =>> all promise reactions are scheduled as microtasks by the JavaScript spec.
*/
console.log("-----------------");

console.log("start");
async function fn() {
  console.log("before awaiat");
  const data = await fetch("https://dummyjson.com/products");
  console.log({ data });
  console.log("after await");
}
fn();
console.log("end");
/* start
before await
end
data
after await
 */

/* STARVATION in event loop
->Each microtask has another microtask before executing probably due to this microtask never get chance in microtask

 */

console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
Promise.resolve().then(() => {
  console.log("C");
});
console.log("D");
/* ADCB */