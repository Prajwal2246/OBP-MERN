/* let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; */

//Question1: printing the diagonal elements sum also called primary diagonal sum
/* Method 1 */
/* 
 let sum=0;
 for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        if(i==j){
            sum+=arr[i][j];
        }
    }
 } 
    console.log({sum});
*/

//TC-O(n^2) SC-O(1)

/* Method 2 imporving TC
 Approach:-  using 2 for loop we check for i==j i.e value of i and j is same 
 we can do that using one loop also
*/
/* 
let sum=0;
 for(let i=0;i<arr.length;i++){
    sum+=arr[i][i];
 }
 console.log({sum});
 */

//Question2 :printing the  secondary diagonal sum
/* method 1 -  using 2 loops */
/* 
 let sum=0;
 let n=arr.length;
 for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i+j==n-1){
            sum+=arr[i][j];
        }
    }
 }
 console.log({sum}); 
 T.C.: O(n2) sc-O(n)
*/

/* Method 2 - single for loop */
/*  
 let sum=0;
 let n =arr.length;
 for(let i=0;i<n;i++){
    sum+=arr[i][n-i-1];
 }
 console.log({sum});
 t.c.- O(n) s.c-O(1)
 */

let arr2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

/* printing the  odd column elements in the matrix using function  
  
  Approach- we iterate in columns so outer loop - columns
   and inner loop for rows because we row remains constant and the changing elements are in row
   and when the row value is odd we log the elements.
 */

function printOddColElem() {
  let col = arr2[0].length;
  let row = arr2.length;
  for (let i = 0; i < col; i++) {
    let sum = "";
    if (i % 2 != 0) {
      for (let j = 0; j < row; j++) {
        // console.log(arr2[j][i]); all elements get printed in one by one
        sum += arr2[j][i] + " "; //all col by col elements in one row
      }
    }
    // console.log(sum);
  }
}

printOddColElem(arr2);

//HW  Ques: Given a 2d matrix, reverse each odd columns and print it
/*
Input =====>
[
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

Output =====>
[
  [1, 10, 3, 23, 5, 8],
  [2, 6, 12, 43, 3, 5],
  [8, 2, 34,  4, 12, 6],
];
*/

// let arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];
/* Method 1: using 2 for loops with extra space 
 function revOddCol(arr) {
  let col = arr[0].length;
  let row = arr.length;
  for (let i = 0; i < col; i++) {
    let temp = [];
    if (i % 2 != 0) {
      for (let j = 0; j < row; j++) {
        temp.push(arr[j][i]);
      }
      temp.reverse();
      for (let j = 0; j < temp.length; j++) {
        arr[j][i] = temp[j];
      }
    }
  }
  console.log(arr);
 } 
 revOddCol(arr); 
 t.c- O(n2) sc-O(~n)
*/

/* Method 2: using 2 for loops but no extra space */
/* 
 function revOddCol(arr) {
  let col = arr[0].length;
  let row = arr.length;
 
  for (let i = 0; i < col; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < Math.floor(row/2); j++) {
          let temp=arr[j][i];
          arr[j][i]=arr[row-1-j][i];
          arr[row-1-j][i]=temp;
      }
    }
  }
   console.log(arr)
 }
 revOddCol(arr)
 T.C-O(n2) s.c.-O(1) 
*/

/* ----------------------SUBARRAYS-------------------- */
/* let arr = [1, 2, 3, 4];
 for (let i = 0; i < arr.length; i++) {
  let subarray = [];
  for (let j = i; j < arr.length; j++) {
    subarray.push(arr[j]);
    console.log(subarray);
  }
}  */
/* t.c-O(n2) s.c-O(n) */

//Question: Write a function to find the sum of all subarrays
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



/*  2d arrays 
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let row=arr.length;
let col = arr[0].length;
//sum of each row
for(let i=0;i<row;i++){
    let sum =0;
    for(let j=0;j<col;j++){
        sum+=arr[i][j];
    }
    console.log("sum of rows:" ,sum)
}

//sum of cols
for(let i=0;i<col;i++){
    let sum=0;
    for(let j=0;j<row;j++){
        sum+=arr[j][i];
    }
    console.log("sum of cols: ",sum);
}

//transpose of matrix
let transpose=[];
for(let i=0;i<col;i++){
     transpose[i]=[];
    for(let j=0;j<row;j++){
        transpose[i][j]=arr[j][i];
    }
    
}

console.log(transpose)

//search elem in 2d array

let target=5;
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(arr[i][j]==target){
            console.log(i,j);
        }
    }
}

//primary diagonal sum
  let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i][i];

}
 console.log("primary diagonal sum:",sum);
 
 //secondary diagonal
 let secondarysum=0;
 for(let i=0;i<row;i++){
     for(let j=0;j<col;j++){
         if(j==arr.length-1-i){
             secondarysum+=arr[i][j];
         }
     }
 }
 console.log("secondary sum: ",secondarysum)
 
 let ssum=0;
 for(let i=0;i<row;i++){
     ssum+=arr[i][arr.length-1-i];
 }
 console.log("secondary sum ",ssum)
 
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let row=arr.length;
let col=arr[0].length;


//making 90deg rotation clockwise
let transpose=[];
for(let i=0;i<col;i++){
    transpose[i]=[];
    for(let j=0;j<row;j++){
        transpose[i][j]=arr[j][i];
    }
}


for(let i=0;i<transpose.length;i++){
    transpose[i].reverse();
}
console.log(transpose)



    
*/