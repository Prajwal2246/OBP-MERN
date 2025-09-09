/* freq of each element in the arr */
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

for (let key of map.keys()) {
  console.log(key, map.get(key));
}

console.log("backtick");
let obj = {};
for (let key of map.keys()) {
  obj[`${key}`] = map.get(key);
}
console.log(obj);

console.log("destructuring");
for (let [key, value] of map) {
  console.log(key, value);
}
/* 
//-----destructuring
const [a,b]=[1,2];
console.log({a,b});
 
 //-----rest operator & destructuring
const [a,...b]=[1,2,3,4,5];
console.log({a,b});
*/

/*
 question2: remove duplicates from array and print the array
 */
arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
console.log({ arr }, "removed duplicates from array ", [...new Set(arr)]);

/* 
question3: find the frequency of all words in paragraph (only spaces,A-Z,a-z letters will be there)
 */

const paragraph =
  "Hello how are you How was your day Did you eat hoW did you find that";

let ParaArr = paragraph.trim().toLowerCase().split(" ");

let maps = new Map();

for (let i = 0; i < ParaArr.length; i++) {
  /* if(maps.has(ParaArr[i])){
        maps.set(ParaArr[i],maps.get(ParaArr[i])+1);
    }else{
        maps.set(ParaArr[i],1);
    } */
  maps.set(ParaArr[i], (maps.get(ParaArr[i]) || 0) + 1);
}

let obj2 = {};
for (let keys of maps.keys()) {
  obj2[`${keys}`] = maps.get(keys);
}
console.log(obj2);

/* -=====================+ANAGRAMS+==================== */
/* 
listen
silent

mad
dam


(not Annagram)
apple aplee
frequency same nh hai
 */

/* 
let str1 = "apple";
let str2 = "applue";
let flag= true;

let mapStr1 = new Map();
if(str1.length != str2.length) {flag =false}
for (let i = 0; i < str1.length; i++) {
  mapStr1.set(str1[i], (mapStr1.get(str1[i]) || 0) + 1);
}

for (let char of str2) {
  if (mapStr1.has(char)) {
    if (mapStr1.get(char) > 0) {
      mapStr1.set(char, mapStr1.get(char) - 1);
    }
  }
}
for (let keys of mapStr1.keys()) {
  if (mapStr1.get(keys) > 0) {
    flag=false;
    break;
  } 
}

if(flag == true){
  console.log(true);
  
}else{
  console.log("false");
  
}
 */
let str1 = "apple";
let str2 = "applw";

function Anagram(a, b) {
  if (a.length != b.length) return false;

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) return false;
    obj[str2[i]] = obj[str2[i]] - 1;
  }

  for (let values of Object.values(obj)) {
    if (values) {
      return false;
    }
    return true;
  }
}

console.log(Anagram(str1, str2));
//T.C.- O(m+n) s.c:O(26) ~ O(1)

/* ========================================+Recursion=========================== */

//bahane dhundne hai ki recursive function ko ksese reuse kr skte hai
function factorial(n) {
  if (n == 0 || n == 1) return 1;

  let fact = n * factorial(n - 1);
  return fact;
}

// console.log(factorial(0)); //t.c.-O(n) s.c. O(1)(however it uses  call stakc space that is not considered in s.c.)

/* print numbers from 1 to n */

function print1ToN(n) {
  if(n==0){
    return ;
  }
  print1ToN(n-1);
  console.log(n);
}
// print1ToN(5);

/* print numbers from n to 1 */
function reversetillN(n){
  if(n==0) return ;
  console.log(n);
  reversetillN(n-1);
}
reversetillN(5);

/*  */