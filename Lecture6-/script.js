//------------------Yesterday HW-------------
/*  let arr4 = [
   [1,  2,   3,    4,  5, 6],
   [2,  6,  12,  43,   3, 5],
   [8, 10, 34, 23, 12, 8],
]; */
/* let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function revOddCol(arr) {
  let col = arr4[0].length;
  let row = arr4.length;
 
  for (let i = 0; i < col; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < Math.floor(row/2); j++) {
          let temp=arr4[j][i];
          arr4[j][i]=arr4[row-1-j][i];
          arr4[row-1-j][i]=temp;
      }
    }
  }
   console.log(arr4)
 }
 revOddCol(arr4) */

 //t.c:O(n2)  s.c:O(1)

/* 
const arr2 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 8],
  [8, 10, 34, 12, 4, 13],
];

function oddColSum(arr2){
  let row=arr2.length;
  let col=arr2[0].length;
  let sum =0;
  for(let i=0;i<col;i++){
    if(i%2==0){
        continue;
    }
    for(let j=0;j<row;j++){
        sum+=arr2[j][i];
    }
  }
  return sum;
}

console.log(oddColSum(arr2));

//t.c:O(n2) */


/* //Question: Write a function to find the sum of all subarrays
let arr=[1,2,3,4];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    ans += sum;
  }
}
console.log(ans);
//t.c.:O(n*n) s.c:O(1) 

 */

//------------------------_TOday:SUbarrays--------------------
const arr=[1,4,3,7,9];

//using pop -- same array
arr.pop();
// console.log(arr);
//using slice -- new array
// console.log(arr.slice(0,3));
//using splice -- same array
arr.splice(arr.length-1,1);
// console.log(arr);
//using loop
//setting arr.length = arr.length-1;

//delete from start
let arr3=[1,2,3,43,4];
//shift() --  delete from start
// arr3.shift();
// console.log(arr3);
//splice
// console.log(arr3.splice(1));
//splice
let arr4=[1,2,3,4,5];
let n=arr4.length; //5
let ans=arr4.slice(1,n);
// console.log(ans);

//using loops
let arr2=[1,2,3,4,5,6,7,8];
for(let i=0;i<=arr2.length-1;i++){
    arr2[i]=arr2[i+1];
}
arr2.length-=1;
// console.log(arr2)




/* ------------------Rotate Array-------------- */
let a=[10,20,30,40,50];

//rotate left
let temp=a[0];
for(let i=0;i<a.length-1;i++){
    a[i]=a[i+1];
}
a[a.length-1]=temp;
console.log(a);


//rotate right
let array=[1,2,3,4,5]; //op [5,1,2,3,4]
let tempelem=array[array.length-1];
for(let i=1;i<array.length;i++){
    let futureVal=arr[i+1]
    array[i+1]=arr[i];
}
array[0]=tempelem;
console.log(array);










 

