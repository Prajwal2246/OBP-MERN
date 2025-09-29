/* contest on sorting */

/* question1:
Write a JavaScript function that merges two sorted arrays into a single sorted array. The function should take two arguments: the two arrays to be merged.

Input Format
The first line is one array, arr1. The second line is the second array, arr2.

Output Format
For each test case, return the merged array.

Examples
Example 1
Input
[1, 3, 4, 5]
[2, 4, 6, 8]
Output
[1, 2, 3, 4, 4, 5, 6, 8]
*/

let arr=[1, 3, 4, 5];
let arr2=[2, 4, 6, 8];

function merge(left,right){
    let i=0,j=0;res=[];
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }

    while(i<left.length){
        res.push(left[i]);
        i++;
    }
    while(j<right.length){
        res.push(right[j]);
        j++;
    }
    return res;
}
let ans=merge(arr,arr2);
console.log(ans);


arr=[1 ,4 ,3 ,5 ,6 ,2];

function iterativeInsertion(arr){
  for(let i=1;i<arr.length;i++){
    let j=i-1;
    let curr=arr[i];
    while(j>=0 && arr[j]>curr){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=curr;
    console.log(arr);
  }
}
iterativeInsertion(arr);

const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];

employees.sort((a,b)=>{
    if(a.department==b.department){
        return a.age-b.age;
    }
    return a.department.localeCompare(b.department);
})

console.log(employees);
