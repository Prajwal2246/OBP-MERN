/* given 2 sorted array a,b and merge both of them */

let A = [1, 3, 4, 7, 10];
let B = [2, 9, 12];

function mergeSortedArr(A, B) {
  let i = 0,
    j = 0,
    k = 0,
    res = [];
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      res.push(A[i]);
      i++;
    } else {
      res.push(B[j]);
      j++;
    }
  }
  while (i < A.length) {
    res.push(A[i]);
    i++;
  }
  while (j < B.length) {
    res.push(B[j]);
    j++;
  }
  return res;
}
// let ans=mergeSortedArr(A,B);
// console.log(ans);



/* --------------------_Merge Sort----------- */

let arr = [3, 7, 1, 5, 8, 2, 4];

function mergeSort(arr, low, high) {

    //base condition
  if (low == high) return [arr[low]];

  //recursive calls
  let mid = Math.floor((low + high) / 2);
  let leftarr = mergeSort(arr, low, mid);
  let rightarr = mergeSort(arr, mid + 1, high);

  //mergin of returned arrays
  return merge(leftarr, rightarr);
}

function merge(left, right) {
  let i = 0,
    j = 0,
    res = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
}

// console.log(mergeSort(arr, 0, arr.length - 1));

/* 
tc:O(nlogn) 
s.c:O(n)
*/

/* -------------------Insertion sort---------- */
let arr2=[3,1,6,2,8,7,4];


let a=[1,2,7,9];
/* insert 6 in above array such that arr is sorted */
let ele=6;

for(let i=0;i<a.length;i++){;
   let ind=i;
   if(arr[i]>ele){
    ind=ele;
   }
   if(ind!=i){
    arr[ind]=ele
   }
}

console.log(a);
