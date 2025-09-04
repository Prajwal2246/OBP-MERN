//last class
const value = 4 + ("34" * " ") / 17;
// console.log(value);
// console.log("value: ",value);
// console.log({value});

//given a n*n grid , find the primary diagonal sum
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //3*3 grid

/* 
[
    [(0,0),(0,1,(0,2)],
    [(1,0),(1,1,(1,2)],
    [(2,0),(2,1,(2,2)],
]
*/

//Primary diagonal
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i][i];
}
console.log({ sum });
//T.C. : O(n),S.C.=O(1)

//secondary diagonal
let sum2 = 0;
let n = arr.length;
for (let i = 0; i < n; i++) {
  sum2 += arr[i][n - i - 1];
}
console.log({ sum2 });
//T.C:O(n) S.C.:O(1)

//write a function to print the odd-numbered column  of a matrix
const arr2 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 8],
  [8, 10, 34, 12, 4, 13],
];

function printOddCol(arr2) {
    let row=arr2.length
    let col=arr2[0].length;

  for (let i = 0; i <col ; i++) {
    if (i % 2 == 0) {
      continue;
    }
    for (let j = 0; j < row; j++) {
      console.log(arr2[j][i]);
    }
  }
}
// printOddCol(arr2);

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

/* 
 given a 2d matrix, reverse each odd columns and print it 

Input:
[
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 8],
  [8, 10, 34, 12, 4, 13],
];
output: 
 [
  [1, 10, 3, 12, 5, 13],
  [2, 6, 12, 43, 3, 8],
  [8, 2, 34, 4, 4, 6],
];
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
/* let arr = [1, 2, 3, 4];
let n = arr.length;

for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
        sum += arr[j];
        console.log(sum)
    }
}  */