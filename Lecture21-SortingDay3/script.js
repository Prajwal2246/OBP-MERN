/* ----------Insertion sort------------ */


function insertionSort(arr){
   let ind=0;

   for(let i=1;i<arr.length;i++){
    let firstelemOfUnsorted=arr[i];
    let indextoInsert=0;
    for(let j=ind;j>=0;j--){
        if(arr[j]>firstelemOfUnsorted){
            arr[j+1]=arr[j];
        }else{
            indextoInsert=j+1;
            break;
        }
    }
    arr[indextoInsert]=firstelemOfUnsorted;
    ind++;
   }
   return arr;
}

console.log(insertionSort([3,1,6,2,8,7,4]));


/* given an array, place its last element at a position such that all 
smalller elements are in the left and greater elements are in the rigiht 

t.c:O(n) and s.c:O(1)
*/

arr=[2,7,5,1,4];

function placeLastElem(arr){
  let lastelem=arr[arr.length-1];
  let k=0; //index that's availavle to place elements<=lastelem

  for(let i=0;i<arr.length;i++){
      if(arr[i]<=lastelem){
          [arr[k],arr[i]]=[arr[i],arr[k]];
          k++;
      }
  }
  return arr;
}

console.log(placeLastElem(arr));

/* quicksort */
arr=[3,1,6,2,8,7,4];
/* function quicksort(arr){

    if(arr.length<=1) return arr;

    let pivot= arr[arr.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
} */


function quicksort(arr,low,high){
    if(low>=high) return  arr;

    let pivot=arr[high];
    let k=0; //index that's availavle to place elements<=lastelem


    for(let i=0;i<high;i++){
      if(arr[i]<=pivot){
          [arr[k],arr[i]]=[arr[i],arr[k]];
          k++;
      }
   }
   
  
   return [...quicksort(arr,low,k-1),arr[k],...quicksort(arr,k+1,high)];
}
// console.log("quicksort",quicksort(arr,0,arr.length-1));

/* sort */
let arr2=[3,4,5,1,2]
console.log(arr2.sort((a,b)=>b-a));

//localCompare
