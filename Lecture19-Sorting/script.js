/*------------------------------------------------- SORTING------------- 
meaning: Data is arranged in a specific manner such that we can know and take decisions about data


example:
1 2 3 45

0 7 -4 2 -3  -6  =>>  -4 -3 -6 0 7 2

1,12,14,5,6,7    =>>  1,5,7,12,14,6
*/

/* standard Algorithm:

   1.Bubble sort: 
     A=[4,5,1,3,2];
     checked all adj. elements if a[i]>a[i+1] then swap them

     after 1st iteration:
     a=[4,1,3,2,5]  ----> largest elment comes at the end of array

     2nd iteration
     a=[1,3,2,4,5]
     
     3rd iteration
     a=[1,2,3,4,5]
*/
let a = [4, 5, 1, 3, 2];
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swaps = false;
    //single pass
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swaps) break;
  }

  return arr;
}
console.log(bubbleSort(a));
console.log(bubbleSort([3, 4, 1, 6, 8, 0]));
/* t.c. - O(n^2) 
  best case tc:O(n)
  worst case t.c.:O(n^2)
  average case tc : HW
  s.c.O(1) constant
*/


/* 2.Selection Sort */
function selectionSort(arr){

}







/*  homework */
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
console.log(ans);
