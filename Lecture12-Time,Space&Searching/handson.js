/* Time complexity */


/* Que:- js is interpreated or compiled lang?
  ans:- Both,
        It is JIT-just in time compilation
        but if asked only one then interpreated
*/

/* 
console.log("hi");
console.log("hi")
- Both  logs hi without semicolon because js engine assumes semicolon (AIS-automatic insertion of semicolon)
*/

/* 
Q1:
while(n>0){
  n--;
}
  t.c- O(n)

Q2:
while(n>0){
  n-=2;
}
   t.c :O(n)

Q3:
while(n>0){
  n/=2;
}
  t.c:O(logn base2)

Q4:
let m=1;
while(n>0){
 n/=2;
}
 t.c:O(logn base2) 

Q5:
for(let i=0;i<n;i++){
 if(n>0){
  n/=2;
 }
}
 t.c:O(logn base2)

Q6:
for(let i=0;i<n;i++){
  if(i==n/2){
    let m=n;
    while(m>0){
      m /=2;
    }
  }
}
  t.c:O(n+logn)=>O(n) because we take bigger value

Q7:
for (let i = 1; i < n; i *= 2) {
  for (let j = 0; j < n; j++) {
    for (let k = j; k < n; k += i) {
      // some constant time work
    }
  }
}
??t.c:O(logn)*O(n)*O(n) =>O(n log²n)       ??
 */


/*--------Space complexity. -Auxilary space  */
// variables -> O(1) constant space

/* 
Q.1
function sum(a,b,c){
 let sum3=a+b+c;
 return sum3;
}
 s.c:O(1)

Q.2
function sum(a,b,c){
 let arr=[a,b,c];
 let sum3=arr[0]+arr[1]+arr[2];
 return sum3;
}
 s.c:O(1)

Q.3
function sum(arr){
 for(let i of arr){
 console.log(i);
 }
}
 s.c:O(1)

Q.4
function findSumtillN(n){
  let arr=[];
  for(let i=1;i<=n;i++){
    arr.push(i);
  }
  let sum=arr ka sum;
  return sum;
}
  s.c:O(n)

Q.5
for(let i=0;i<n;i++){
  let x=i;
  console.log(x);
}
  s.c:O(n)

Q.6
let arr=[];
while(n>0){
  arr.push(n);
  n=n/2;
}
  s.c:O(logn base2)
 */

/*-----------------------_SHortciruting----------------------- 
 let obj = {
  a: { c: 1, d: 2 },
  b: 2,
};

if (obj && obj.aa && obj.aa.c == 1) {
  console.log("Hi");
} else {
  console.log("invalid props");
}

const x = true && 45;  //last true value leta hai agar false na mile to
const y = x===45&&34
*/

/* js takes only 6 values which are considered as false
  1.false
  2.Null
  3.Undefined
  4.Zero
  5.NaN
  6."" (empty string)
*/


/*
 const x = "A"*12+4 && true;
 console.log(x) //NaN
 =>
   "A" * 12 => NaN
    NaN + 4 =>NaN
    NaN && true -Shortcircuit it gets false:
    so output is false(NaN)
*/

/* 
 const y = x === NaN && 34;
 console.log(y)  // false
 - x === NaN is always false, even if x is NaN!
 - NaN is the only value in JavaScript that is not equal to itself.
*/

// console.log(Number("123"));
// console.log(+String(123)); //+ convert string into number
// console.log(Boolean(NaN));

/* 
 for logical AND (&&)
 => in short circuiting first falsy or last truthy value will be op
 for logical OR (||)
 => in short circuiting first truthy or last falsy value will be op.
*/


/* ----------------------------------------_Searching------------------------------ */
/* let arr2 = [1, 2, 4, 4, 6, 6, 6, 8];
//find first index of 6
//find last index of 6

let firstIndex = -1;
let lastIndex = -1;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == 6) {

    if (firstIndex == -1) {
      firstIndex = i;
    }

    lastIndex = i;
  }
}
if(firstIndex !== -1){
console.log(firstIndex, lastIndex);
}else{
  console.log("6 not exist in array");
  
} */
//t.c: O(n)


