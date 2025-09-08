/* function to print all the palindromic substring of a string
   string-aabaaba 
*/

/* time Complexity */
// js is interpreated and compiled  (JIT-just in time compilation)

/*
 console.log(hi);
console.log(hi)

both log runs but js automatically puts semicolon(on basis of prediction)
//ais-automatic insertion of semicolon
 */

/* EXAMPLES of T.C 

1.while(n>0){
  n--;
}
  t.c : O(n)
2.while(n>0){
  n-=2;
}
t.c : O(n)

3.while(n>0){
  n*=2;
}
t.c : infinite loop

4.while(n>0){
  n/=2;
}
t.c : O(logn base2) base jisse divide krte vo ban jata hai

5.while(n>0){
  n/=5;
}
t.c :O(logn base 5)

let m=1
6.while(n>0){
  m*=2;
}
t.c: O(logn base 2) 

7.
for(let i=0;i<N;i++){
while(n>0){
 n/=2;
}
}
t.c:O(log n)

8.
for(let i=0;i<n;i++){
  if(i==n/2){
    let m=n;
    while(m>0){
      m /=2;
    }
  }
}
t.c: O(n+logn) dono me se jo bhi bada hai usse lete hai so that becomes O(n)
  o(n+logn) approximated to O(n)
*/

/* 
Space complexity. -Auxilary space

variables -> O(1) constant space

1.function sum(a,b,c){
 let sum3=a+b+c;
 return sum3;
}
 s.c - O(1)

2.function sum(a,b,c){
 let arr=[a,b,c];
 let sum3=arr[0]+arr[1]+arr[2];
 return sum3;
}
s.c-O(1)

3.
function sum(arr){
 for(let i of arr){
 console.log(i);
 }
}
s.c : O(1)


4.
function findSumtillN(n){
  let arr=[];
  for(let i=1;i<=n;i++){
    arr.push(i);
  }
  let sum=arr ka sum;
  return sum;
}
s.c-O(n)

5.
for(let i=0;i<n;i++){
  let x=i;
  console.log(x);
}
s.c:O(n)

6.
let arr=[];
while(n>0){
  arr.push(n);
  n=n/2;
}

*/

/*------------------------------ shortciruciting */
/* 
let obj = {
  a: { c: 1, d: 2 },
  b: 2,
};

if (obj && obj.aa && obj.aa.c == 1) {
  console.log("Hi");
} else {
  console.log("invalid props");
}


const x=true&&45;  //last true value leta hai agar false nh milta hai to
const y=x==45&&34;
console.log({x,y});
 */

/* js takes only 6 values are considered to be false
 - 0
 - false
 - null
 - undefined
 - NaN
 - "" empty string
*/

//hw can we write nan ???
const x =
  "A" * 12 + 4 &&
  true; /* In JavaScript, the && (logical AND) operator returns the first falsy operand if the first is falsy, otherwise it returns the second operand.
NaN is falsy, so NaN && true evaluates to NaN. */
// console.log(x);
const y =
  x === NaN &&
  34; /* In JavaScript, NaN is not equal to anything, not even itself. so x=false so y op is false */
// console.log(y);

// console.log(Number("123"));
// console.log(+String(123)); //+ convert string into number
// console.log(Boolean(NaN));

/* for logical AND (&&)
in short circuiting first falsy or last truthy value will be op

for logical OR (||)
in short circuiting first truthy or last falsy value will be op.
 */

/* ------------------------------------------------------------------Searching---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//1
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i + 1);
}

function search(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 57) {
      console.log(i);
    }
  }
}
search(arr);
//t.c-O(n)

//2
let arr2 = [1, 2, 4, 4, 6, 6, 6, 8];
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
  
}
//t.c: O(n)


/* -------------------------------------------------------------Binary search-------
 To apply binary search 
 - we see search space
 - sorted manner compulsory
 - t.c - O(log n)
 */

//. for -> //1



