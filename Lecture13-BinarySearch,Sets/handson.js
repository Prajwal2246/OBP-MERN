/* binary search 
--> T.C. O(log n)
--> search space sorted
--> low mid high

--> ans hamesha mid pr milega
--> right range is eliminate
   high=mid+1
 */

/* q1: find the sqroot of a number on O(log n) */
let n = 36;
function sqroot(n) {
  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (mid * mid == n) {
      return mid;
    } else if (mid * mid > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log("sqroot of " + n + " is", sqroot(n));

/* Q2: find a target element in sorted array */

let arr = [1, 3, 6, 7, 9, 11, 15];
let target = 11;

function findtarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let elem = arr[mid];

    if (elem == target) {
      return mid;
    } else if (elem > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log("target found at index: ", findtarget(arr, target));

/* Q3: find the first occurance of target elem */
let arr2 = [1, 2, 6, 6, 11, 11, 11, 15];
let target2 = 6;
let index = -1;

function ocuuranceFirst(arr2, target2) {
  let low = 0,
    high = arr2.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let elem = arr2[mid];

    if (elem === target2) {
      index = mid;
      high = mid - 1;
    } else if (elem > target2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}

console.log(
  "first occurance of " + target2 + " is at index:",
  ocuuranceFirst(arr2, target2)
);


/* ------------terms

lowerbound -> first index of element greater than or equal to the target element
upperbound ->first index of element greater than the target element

let arr=[1,2,6,6,11,11,11,15];
lb(2)->1
lb(4)->0
lb(0)->0
lb(11)->4
lb(15)->7

ub(1)->1
ub(7)->4
ub(15)-> arr.length
ub(0)->0
 */

/* lowerbound
let arr = [1, 3, 6, 7, 9, 11, 15];
let target = 11;
 */
function lowerbound(arr,target){
 let low=0;
 let high=arr.length-1;
 let index=arr.length

 while(low<=high){
    let mid=Math.floor(low + (high - low) / 2);

    if(arr[mid]>=target){
        index=mid;
        high=mid-1;
    }else{
        low = mid+1;
    }
 }
 return index;
}
console.log("lowerbound of 11",lowerbound(arr,target)) //5

/*  hw upperbound  */

function upperBound(arr,target){
    let low=0;
    let high=arr.length-1;
    let index=arr.length;

    while(low<=high){
        let mid = Math.floor(low +(high-low)/2);

        if(arr[mid] > target){
            index=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return index;
}

console.log("upperbound of 11",upperBound(arr,target));


/* 
Set - only unique elements
map - key value pairs 
    - key must be differnt acrross all pairs
    - key can be anything
for of loop can be used in both
 */

/* Set Methods */
let set = new  Set([1,2,3,4,4,5,5,6]);
console.log(set);
set.add(2);
console.log("after adding 2: ",set);
console.log("set has 6 or not: ",set.has(6));
console.log("set has 123 or not",set.has(123));

//size of set
console.log("size of set is",set.size,set);

console.log("after deleting 6 from set",set.delete(6),set);


/* question : remove duplicate from the array */

let arr1 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
console.log("remove dupli from array",new Set(arr1));
console.log([...new Set(arr1)]);
console.log(new Set([...arr1]));

/* Map in js */

let map = new Map([
    ["name","Prajwal"],["name2","rahul"]
])
console.log(map);

//map.set("name","prajwal");

const mapArr = [...map];
console.log(mapArr);

//checking if key is present or not
console.log("checking if key is present or not: ",map.has("name2"));

//getting a value
console.log("getting a value of name2:",map.get("name2")) ;

//delete a key
console.log("delete a key",map.delete("name2"));  //true

//updating a key
console.log("update the value",map.set("name2","roy"));

//for of loop
for(let i of map){
    console.log("key: "+i[0]+" values: "+i[1]);
}


//printing keys
for(let i of map.keys()){
    console.log("keys: "+i);
}

/* question: find frequency of each element in arr */
let arr3 = [2,3,4,1,0,1,2,3,4,5,10];
let map1 = new Map();

for (let num of arr3) {
    map1.set(num, (map1.get(num) || 0) + 1);
}

console.log("Frequency map:", map1);


/* find intersection and union */
let arr4=[1,2,4,5,6]; let arr5=[2,5,6,3,1,3];

function intersection(arr4,arr5){
    let ans=[];
    let set=new Set(arr4);
    let set2=new Set(arr5);
    
    for(let num of set2){
        if(set.has(num)){
            ans.push(num);
        }
    }
    return ans;
}

console.log(intersection(arr4,arr5).join(","));

function union(){
    const unionSet = new Set([...arr4,...arr5]);
    const unionArr = [...unionSet];
    return unionArr;
}

console.log(union(arr4,arr5));











