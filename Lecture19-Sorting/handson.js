/* sorting handson */

/* examples of sorting 
a=[28,4,7,1,9] => [1,4,7,9,28]

a=[-3,-11,10,2,12,-16] => [-16,-11,-3,2,10,12]

*/
/* some concepts --- 
----------------------------------Stable sorting 
let a=[2,3,2,3,1];
in. stable sorted consider the a=[2a,3a,2b,3b,1a]
so when array will be sorted the 2a should be always before 2b


*/

/* -----------------------------------------SORTING ALGORITHMS--------------------  


--------------------------------------------1.Bubble sort
basic idea- swap adjacent element and after each iteration
largest elment will be at the end of the array

let a=[4,5,1,3,2]
check all adjacent elements and if a[i]>a[i+1] then swap them

after 1st iteration
a=[4,1,3,2,5]

2nd iteration
a=[1,3,2,4,5]

3rd  iteration
a=[1,2,3,4,5]
*/

let arr = [4, 5, 1, 3, 2];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
/* time complexity. (Bubble sort)
best: O(n) 
  - when array is sorted 
  - we have to iterate over array only once
worst: O(n^2)
 - when decreasing/reverse order array is there
Average: O(n^2)
 - on average elements are halfway of corect position
*/

/* -----------------------------------2.SELECTION SORT-------------------------------- 
basic idea: select the smallest element in the array and then 
place it at the starting of array
*/

let arr2 = [4, 7, 1, 6, 1, 7, 8, 10];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if(smallest!=i){
        [arr[i],arr[smallest]]=[arr[smallest],arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort(arr2));
/* time complexity :O(n2) s.c:O(1)*/



/* homeworl */
let A = [4, 1, 3, 7, 5, -4, -2, -1];

//1,3,4,5,7
let ans = [];
function increaseSort(arr) {
  let posArr = [];
  let negativeArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr[arr[i]] = 1;
    } else {
      negativeArr[Math.abs(arr[i])] = 1;
    }
  }

  for (let i = negativeArr.length - 1; i > 0; i--) {
    if (negativeArr[i] == 1) {
      ans.push(-i);
    }
  }
  for (let i = 0; i < posArr.length; i++) {
    if (posArr[i] == 1) {
      ans.push(i);
    }
  }
}

increaseSort(A);
console.log(ans)
