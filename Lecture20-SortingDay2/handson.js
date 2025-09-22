/* given 2 sorted arrays a and b merge them both */

let arr1=[1, 3, 4, 7, 10];
let arr2=[2, 9, 12];

function mergeSortedArrs(arr1,arr2){
    let i=0,j=0,res=[];

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        res.push(arr1[i]);
            i++;
    }

    while(j<arr2.length){
        res.push(arr2[j]);
            j++;
    }
    return res;
}

let ans = mergeSortedArrs(arr1,arr2);
// console.log(ans);


/* ---------------merge sort--------

Points: 
- divide and conquer
- Divide arr into half
- each half divide until single elem
- every single element is sorted 
- merge the sorted array into one single array
- T.C. :O(nlogn) //divide array into.2 so logn and every level has n elements
- s.c  :O(n) //every time we divide the array 
 */

let arr=[3, 7, 1, 5, 8, 2, 4];

function mergeSort(arr){
    //base condtion 
    if(arr.length <= 1) return arr;

    //recursion calls
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    //merging the sorted arrays
    return mergeSortedArrs(left,right);
}

let ans2=mergeSort(arr);
// console.log(ans2);

/* without using slice in mergesort function */
function mergeSort(arr,low,high){
    //base condition 
    if(low===high){
        return [arr[low]];
    }

    //recursion calls
    let mid = Math.floor((low+high)/2);
    let left=mergeSort(arr,low,mid);
    let right=mergeSort(arr,mid+1,high);

    //merging sorted arrays
    return mergeSortedArrs(left,right);
}

let ans3=mergeSort(arr,0,arr.length-1);
// console.log(ans3);


/* ---------------------_Insertion Sort---------------- */

/* insert an element in the sorted array such that the final array should be sorted */
let arr3=[1,2,7,9];
let elem=6;

arr3.push(0);

for(let i=arr3.length-2;i>=0;i--){
    if(arr3[i]>elem){
        //right shift elem
        arr3[i+1]=arr3[i];
    }else{
        //if smaller element found then i+1 pr elem chahiye aur break krdo
        arr3[i+1]=elem;
        break;
    }

}
console.log(arr3);


