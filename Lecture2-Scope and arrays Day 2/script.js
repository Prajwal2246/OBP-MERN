/* ̉yesterday
-functions 
 -when and why use functin
 -defination and invokeking
 -functions with parameters
 -default parameter
 -nested functions

-arrays
 -what are arrays
 -2 ways to declare arrays
 -function of arrays -push/pop unshift/shift
 -for ..in loop and for ...of loop
 -
 */


/* ----------------------continue array methods---------------- */
const teams = ["csk", "rcb", "srh", "kkr", "gt"];

//------------------- 1.indexOf(value) return -1 or index of elem

console.log("index of srh using indexOf: ", teams.indexOf("srh") + 1);
console.log(teams.indexOf("abc")); //-1

//replace gt with lsg
// const i=teams.indexOf("gt");
// teams[i]="lsg";
// console.log(teams);

//another way
//  const kkrIndex = teams.indexOf("kkr");
//  if(kkrIndex !=-1){
//     teams[kkrIndex]="LSG";
//   }
//  console.log(teams);

//------------------- 2. includes(). function in arr- tells if a value is present or not 
//returns boolean value

console.log(teams.includes("abc"));  //false
console.log(teams.includes("srh"));  //true

//replace kkr with lsg using includes
const oldteam = "kkr";
const newTeam = "RR";
if (teams.includes(oldteam)) {
    let i = teams.indexOf(oldteam);
    teams[i] = newTeam;
}
console.log(teams);


//3-------------------concat-------
const team2=["mi","lsg","rr"];
const otherteams = ["mi2","rr2"]
const completeteam = team2.concat(teams,otherteams);
console.log(completeteam)

//---------_Questions on function and array

//Q1: find factorial of a number
const n=5;
function factorial(n){
    let fact=1;
    if(n==1) {
        return 1;
    }
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact
}
console.log(factorial(n));

 //Q2: nCr = n!/((n-r)!*r!)
//  given array [4,10,6,8] and r=4
let arr=[4,10,6,8],r=4;
function factorial(n){
    let fact=1;
    if(n==1) {
        return 1;
    }
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact
}

function ncrCal(arr,r){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        let n=arr[i];
        let numerator=factorial(n);
        let denominator=factorial(r)*(factorial(n-r));
        ans.push(numerator/denominator);
    }
    return ans;
}

console.log(ncrCal(arr,r))

// ------------------average ---------------
let arr2 =[4,10,6,8];
function average(arr2){
    let sum =0;
    for(i of arr2){
      sum+=i;
    }
    return sum/arr2.length
}

console.log(average(arr2)); 

// ------------------- tofixed------------------------
/* The toFixed() method converts a number to a string.
The toFixed() method rounds the string to a specified number of decimals. */

/* let a = 5.567;
a = a.toFixed(1);
console.log(a);//5.6
let a=5.567;
a=a.toFixed(2);
console.log(a);//5.57 */



































