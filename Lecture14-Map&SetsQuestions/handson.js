/* frequency of elements in array */
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
console.log(map);

for (let key of map.keys()) {
  console.log(key, map.get(key));
}

console.log("destructuring");
for (let [key, value] of map) {
  console.log(key, value);
}

console.log("backtick");
let obj = {};
for (let key of map.keys()) {
  obj[`${key}`] = map.get(key);
}
console.log(obj);

/*
 question : remove duplicates from array adn print the array
 */
arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
let set = new Set(arr);
console.log(set);

/* 
 question: find the frequency of all words in paragraph
 */
const paragraph =
  "Hello how are you How was your day Did you eat hoW did you find that";

let paraArr = paragraph.trim().toLowerCase().split(" ");
let map1 = new Map();

for (let i = 0; i < paraArr.length; i++) {
  let word = paraArr[i];
  /*
    if(map1.has(word)){
        map1.set(word,map1.get(word)+1);
    }else{
        map1.set(word,1);
    } */
  map1.set(word, (map1.get(word) || 0) + 1);
}
console.log(map1);

/* --------------_ANagrams------------ */

/* 
 examples
listen
silent

mad
dam


not anagram
apple
aplee
*/

let str1 = "apple";
let str2 = "apple";
function anagram(a, b) {
  /* if (a.length !== b.length) return false;

  let map = new Map();

  // Count characters in string 'a'
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Decrease count based on string 'b'
  for (let char of b) {
    if (!map.has(char) || map.get(char) === 0) {
      console.log(false);
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  // At this point, all counts should be 0
  console.log(true);
  return true; 
  */
 if(a.length != b.length) return false;
 let obj={};
 for(let i=0;i<a.length;i++){
    obj[a[i]]=(obj[a[i]] || 0 )+1;
 }
 for(let i=0;i<b.length;i++){
    if(!obj[b[i]]) return false;
    obj[b[i]]=obj[b[i]]-1;
 }

 for(let values of Object.values(obj)){
    if(values) return false;
    return true;
 }
}


console.log(anagram(str1, str2));
//T.C.: O(m+n)
//S.C : O(26) ~ O(1)

/* ==========+Recursion=========== */
/* bahanae dhundhne hai ki recursive function ko kaise reuse kr skte hai */

function factorialof(n){
 
    //base condition
    if(n == 0 || n==1) return 1;
    let fact=n*factorialof(n-1);
    return fact;
}

console.log(factorialof(5));
console.log(factorialof(0));
console.log(factorialof(7));
console.log(factorialof(3));

/* print numbers from 1 to n */
function numFrom1toN(n){
    
    if(n==0) return;

    console.log(n);
    numFrom1toN(n-1);
}

numFrom1toN(5);
/* print numbers from n to 1 */
function numFromNto1(n){
    
    if(n==0) return;
    
    numFromNto1(n-1);
    console.log(n);
}

numFromNto1(5);




