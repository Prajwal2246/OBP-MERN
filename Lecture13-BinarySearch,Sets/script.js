/* 
binary search    t.c:O(log n)
 Q:When to apply? ->. search space should be sorted
 Q:How to apply?
 -> low high mid
   answer will always come at mid ,otherwise look for answer in left/right
 */

/*
-------------------------------------POints to remember
- if right range is eliminated 
  low----- mid -----high
  high becomes mid-1
- if left range is eliminated
  low----mid-----high
  low becomes mid+1
*/

/*
 Question:1
find the square root of a number in O(log n) T.C. 
*/
let n = 36;
function findSqroot(n) {
  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let midsq = mid * mid;

    if (midsq == n) {
      return mid;
    } else if (midsq > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log("Square root of " + n + " is:", findSqroot(n));

/*
 Question:2
find a target element in a sorted array 
*/

let arr = [1, 3, 6, 7, 9, 11, 15];
let target = 11;

function findTarget(arr, target) {
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

console.log("target found at index: ", findTarget(arr, target));

/* fint the first occurance of target elem */
let arr2 = [1, 2, 6, 6, 11, 11, 11, 15];
let target2 = 6;

function findfirstOccur(arr2, target2) {
  let low = 0;
  let high = arr2.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let elem = arr2[mid];

    if (elem == target2) {
      result = mid;
      high = mid - 1;
    } else if (elem > target2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

console.log(
  "first occurance of " + target2 + " is at index:",
  findfirstOccur(arr2, target2)
);

/* ---------_Terms 
 1.Lowerbound -> first index of  element greater than or equal to target element
 2.upperBound -> first index of  element greater than the target element
 hw upperbound 

 let a=[1,2,6,6,11,11,11,15]
 lb(4)->2
 lb(1)->0
 lb(0)->0
 lb(11)->4
 lb(15)->7

 ub(1)->1
 ub(7)->4
 ub(15)->n(length of arr)
 ub(0)->0
 
*/

/* lowerbound */
function lowerbound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] >= target) {
      index = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return index;
}

/* upperbound hw */

/*---------------------------------------------------------------- SETS and MAP in JS ---------------------------------------------------------------- */

/*
 Set - only unique data is present.
 Map - contains key value pairs and key must be differnt acrross all pairs
     - key can be anything
  for of loop ->>> can be used in both
*/

let set = new Set([1, 2, 3, 4, 3, 6]);
console.log({ set });

//Method. to add element in set
set.add(23);
set.add(10);
console.log({ set });

//method to check is a number is in set or not
console.log(set);
console.log("checking if 6 is in arr:", set.has(6)); //true
console.log("checking if 123 is in arr:", set.has(123)); //false

console.log("size of set:", set.size);

//method to remove the element from the set
set.delete(6);
console.log("deleted 6 from the set", set);
console.log(set.delete(6)); //agar present nhi hai to vo false return krta hai

/* remove duplicates from the array */
let arr1 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
console.log("removed duplicates from array", new Set(arr1)); //set
console.log([...new Set(arr1)]); //array
console.log(new Set([...arr1])); //set

let set1 = new Set(arr1);
let arr3 = Array.from(set1);
let arr11 = [...set1];

let set2 = new Set([...arr1]);
let arr22 = [...set2];

/* Map in js */
let map = new Map([
  ["name", "Prajwal"],
  ["name1", "Pratik"],
]);

console.log(map);

// map.set("name","Prajwal");
// map.set("name1","Pratik");

const mapArr = [...map];
console.log(mapArr);

//checking if a key is present or not
console.log("checking is key present or not ?",map.has("name1")); //true

//getting the value of a specific key
console.log("geeting value of name1:",map.get("name1"));

//deleting a key 
console.log("delete a key",map.delete("name1")) //true
console.log("delete a key",map.delete("name2")) //false

//uopdating the value 
console.log("update the value ",map.set("name1","sargar"));


/* for Of loop */
for(let i of map){
  console.log("key: "+i[0] +", values "+i[1]); 
}

console.log("printing keys")
for(let i of map.keys()){
  console.log(i);
}

/* Question : find the frequency of each element in arr */
let arr4=[2,3,4,1,0,1,2,3,4,5,10];
let map1 = new Map();


console.log(map1);


/* Question : find intersection & union  */
let arr5=[1,2,4,5,6], arr6=[2,5,6,3,1,3]
// intersection - 1,2,5,6
// const unionArr = [...new Set([...arr5,...arr6])];
const unionSet = new Set([...arr5,...arr6])
const unionArr = [...unionSet]
console.log(unionArr);

