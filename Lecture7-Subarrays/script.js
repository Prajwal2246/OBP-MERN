/* sum of subarrays */
/* max sum of subarrays */

/* function to calculate the max sum of all subarrays */
let arr = [-1, 5, -3, 2, -1, 3];
let sIndex=0;
let lIndex=arr.length-1;
function maxSubarraySum(arr) {
  let maxsum = arr[0];
  
  

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if(maxsum<sum){
        maxsum=sum;
        sIndex=i;
        lIndex=j;
      }
      maxsum = Math.max(sum, maxsum);
    }
  }
  return maxsum;
  
}
// console.log("maximum subarray sum from ",sIndex,"to",lIndex,"is",maxSubarraySum(arr));

/* count the number of subarrays whose sum is k */
const arr2=[1,2,-3,0,1,-1,1] ;
// let k=0;
//op:9

function subarraySumK(arr2,k){
    let n = arr2.length;
    let count =0;
    for(let i=0;i<n;i++){
        let currentSum=0;
        for(let j=i;j<n;j++){
            currentSum+=arr2[j];

            if(currentSum==k){
                count++;
            }
        }
    }
    return count;
}
// console.log(subarraySumK(arr2,k));

/* given a sum k find the longest subarray whose sum is equal to k */

const arr3=[1,2,-3,0,1,-1,1];
// let k=0;
//op:-6

function longSubarraySumK(arr3,k){
    let startIndex=0;
    let endIndex=arr3.length-1;
    let n = arr3.length;
    let maxLen=0;

    for(let i=0;i<n;i++){
        let currSum=0;
        for(let j=i;j<n;j++){
            currSum+=arr3[j];

            if(currSum === k){
                startIndex=i;
                endIndex=j;
                const len = endIndex - startIndex + 1;
                maxLen=Math.max(maxLen,len)
            }
        }
    }
    return maxLen;
}

// console.log(longSubarraySumK(arr3,k));

/* write a function to print all subarrays of  size k*/
let k=3;

function printSubarrayofK(arr3, k) {
    const subarrofsizek=[];
  let n = arr3.length;

  for (let i = 0; i < n; i++) {
    let subArr="";
    /* Method 1
    if (i + k > n) {
      break; // no more subarrays of size k possible
    }

    let subArr = [];
    for (let j = i; j < i + k; j++) {
      subArr.push(arr3[j]);
    }
    console.log(subArr);
  } */

    //method 2
    for(let j=i;j<i+k;j++){
        subArr +=arr[j]+" ";
    }
    subarrofsizek.push(subArr);

    //method3
    //only 1 line subarrayofsizek.push(arr.slice(i,i+k));
  }
}

console.log(printSubarrayofK(arr3, k));

