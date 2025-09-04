/* 
Day-3
Array question
 -Prefix sum
 -Freq array
 -all pairs with differnce=k
 -plus minus 
*/
/* Scopes */

//global variable
x = 10;
console.log(x);

let y = 5;
const z = 12;
var w = 15;

{
    // let y=6;
    var y1 = 6;
    const y2 = 17;
    console.log("var inside blockscope: ", y1);
    console.log("const inside blockscope: ", y2);
}


// console.log("const inside blockscope: ",y2); // y2 is not defined


//var is function scope
console.log("var outside block scope: ", y1); //6

function sayHi() {
    for (let i = 0; i < x; i++) console.log("Hi")
}
console.log(sayHi())


//nested scope
function nestedScope() {
    let value = 145;
    for (let i = 0; i < 5; i++) {  //if wala part hai vo nestedscope ka nested scope hai
        let value2 = 35;
        console.log(value, value2);
    }
}

// nestedScope()


/* Questions on  nested array

 Q1:
 let arr = [1,[1,2,3],4,5,[6,95,71],80];
 
 //using undefined keyword
 for(let i=0;i<arr.length;i++){
    if(arr[i].length == undefined ){
        console.log(arr[i]);
    }else{
        arr[i]=arr[i].toString();
     console.log(arr[i]);  
    }
 }

 //using typeof
 for(let i=0;i<arr.length;i++){
    if(typeof(arr[i]) == "number" ){
        console.log(arr[i]);
    }else{
        for(let j=0;j<arr[i].length;j++){
          console.log(arr[i][j]);  
        }
    }
 }
 
 //using Array.isArray()
 let arr = [1,[1,2,3],4,5,[6,95,71],80];
for(let i=0;i<arr.length;i++){
    if(!Array.isArray(arr[i]) ){
        console.log(arr[i]);
    }else{
        for(let j=0;j<arr[i].length;j++){
          console.log(arr[i][j]);  
        }
    }
}
 

op:
1
1,2,3
4
5
6,95,71
80
 */


/* Matrix problems 
 Q1: write. a fcuntion that takes a nested array as an argument and tells if this nested array is a matrix or not
 // let arr = [[1,2,3],[4,5,6]];
// let arr=[1,2,3,4,5];

function isMatrix(arr){
   if(!Array.isArray(arr))return false;
   if(!Array.isArray(arr[0])) return false;
   let colsize = arr[0].length;
   
   for(let array of arr){
       if(array.length != colsize){
           return false;
       }
   }
     return true
}

console.log(isMatrix(arr));

-----------------------------------------------
const arr3=[' '];
console.log(arr3[0]);

---------------------------------------
let arr4=[" "];
console.log(4/(arr4[0]*1));    //Infinity
console.log(-4/(arr4[0]*1));   //-Infinity


-Q2.Write a fcuntion to calculate product of sum of each rows

let arr=[[1,2,3],[4,5,6],[7,8,9]];

function productSumRow(arr){ 
let product=1;
for(let i=0;i<arr.length;i++){
    let sum =0;
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
    product *= sum;
}
return product;
}

console.log(productSumRow(arr));



-Q3.Write a fcuntion to calculate the sum of nested arrays

let arr=[[1,2,3],[4,5,6],[7,8,9]];

function productSumRow(arr){ 
let product=0;
for(let i=0;i<arr.length;i++){
    let sum =0;
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
    product += sum;
}
return product;
}

console.log(productSumRow(arr));
*/

//------------------_subArray----------------
/*  print all. subarrays
let arr=[1,2,3,4];
let n=arr.length;

for(let i=0;i<n;i++){
        let subarr=[];
    for(let j=i;j<n;j++){
        subarr.push(arr[j]);
         console.log(subarr.join(" "));
    }
}  */

// print sum of subarrays
let arr = [1, 2, 3, 4];
let n = arr.length;

for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
        sum += arr[j];
        console.log(sum)
    }
} 
