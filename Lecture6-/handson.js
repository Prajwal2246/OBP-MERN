/* ------------------------=----------------------------------array methods-=-------------------------- */
// let arr=[1,2,3,4,5];


//=--------------------------remove the last element
/* method 1 - using pop
arr.pop();
console.log(arr);

*/
/* Method 2 - slice exclude the last index
let slicedArr=arr.slice(0,4);
console.log(slicedArr);
*/

/* Method 3 - splice  
arr.splice(arr.length-1,1); //which elem,how many elem
console.log(arr);
*/

/* method 4 - using arr.length 
arr.length=arr.length-1;
console.log(arr);
*/

//=--------------------------remove the first element
/* shift - pop 
arr.shift()
console.log(arr);
*/

/* splice 
arr.splice(0,1)
console.log(arr);
*/

/* slice 
let slicedArr=arr.slice(1,arr.length);
console.log(slicedArr);
*/

/* arr.length /using loops 
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1];
}
arr.length=arr.length-1;
console.log(arr);
*/

//=--------------------------push one element at end of array
/* push
arr.push(6);
console.log(arr);
*/

/* using arr.length 
arr[arr.length]=6;
console.log(arr);
*/

/* splice 
arr.splice(arr.length+1,0,6);
console.log(arr);
*/

/* spread operator 
let spreadArr= [...arr,6];
console.log((spreadArr));
*/

/* concat 
arr= arr.concat(6);
console.log(arr);
*/

//=--------------------------push one element at start of array

/* unshift  
arr.unshift(6);
console.log(arr);
*/

/* splice 
arr.splice(0,0,6);
console.log(arr);
*/

/* spread operator 
let newarr=[6,...arr];
console.log(newarr);
*/

/* concat 
let newArr=[6].concat(arr);
console.log(newArr);
*/

/* using loops 
let newArr=[];
newArr.push(6);
for(let i=0;i<arr.length;i++){
    newArr[i+1]=arr[i];
}
console.log(newArr);
*/

//=--------------------------Rotate the array
let arr=[1,2,3,4,5];

/* anticlockwise - left shift -  op:2,3,4,5,1 */

/* method 1: using temp  
let temp=arr[0];
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1]=temp;
console.log(arr);
*/

/* method 2: using shift and push 
let firstElem = arr.shift();
console.log(arr); 2,3,4,5
arr.push(firstElem);
console.log(arr);2,3,4,5,6
*/

/* slice and concat 
let slicedArr=arr.slice(1).concat(arr[0]);
console.log(slicedArr);
*/


/* clockwise -  right shift - op:5,1,2,3,4*/

/* method1: using temp variable
let temp=arr[arr.length-1];
let slicedArr=arr.slice();//shallow copy

for(let i=1;i<arr.length;i++){
    arr[i]=slicedArr[i-1];
}
arr[0]=temp;
console.log(arr);
*/

/* using pop and concat
let temp=arr.pop();
let newArr=[temp].concat(arr)
console.log(newArr);
*/

/* using pop and unshift 
let temp = arr.pop();
arr.unshift(temp);
console.log(arr);
*/

/* using pop and splice 
let temp = arr.pop();
arr.splice(0,0,temp);
console.log(arr);
*/







