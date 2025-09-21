/* recursion revision handson */

/* factorial of a number */
function factorial(n) {
  if (n === 0 || n == 1) return 1;

  return n * factorial(n - 1);
}

// console.log(factorial(5));
// console.log(factorial(3));

/* fibonacci series */
function fibonnaci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log("fibonacci ", fibonnaci(6));

/* sum of first n number */
function sumOfNNumber(n) {
  if (n == 0) return 0;

  return n + sumOfNNumber(n - 1);
}

console.log("sum of n numbers:", sumOfNNumber(5));

/* reverse a string using recursion */

function revString(str) {
  if (str.length == 0) return "";

  return revString(str.slice(1)) + str[0];
}

console.log("reverse a string:", revString("abc"));

/* Recursively Print Numbers */

let n = 5;
function printNumbers(n) {
  if (n == 0) return;
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);

function printNto1(n) {
  if (n == 0) return;
  console.log(n);
  printNto1(n - 1);
}

printNto1(5);

/* Nth Even Fibonacci Number */
function fibonacciNthNum(n) {
  if (n == 1) return 2;
  if (n == 2) return 8;

  return 4 * fibonacciNthNum(n - 1) + fibonacciNthNum(n - 2);
}

console.log(fibonacciNthNum(4));

/* 
* 
* * 
* * * 
* * * * 
* * * * *

 */

// function patternPrint(n,current=1){

//     if(current>n) return;
//     printStar(current);
//     console.log();
//     patternPrint(n,current+1);

//     function printStar(count,star=1){
//         if(star>count) return;
//         process.stdout.write("* ");
//         printStar(count,star+1);
//     }
// }

// patternPrint(5);

/* Print Range Recursively */
function printRange(x, y) {
  if (x > y) return;

  console.log(x);
  printRange(x + 1, y);
}

printRange(5, 8);

/* Recursive Exponentiation by Squaring */

function recursiveExponentiation(x, y) {
  // if(y==0) return 1;
  // return x*recursiveExponentiation(x,y-1);

  let ans = 1;
  function recursion(x, y) {
    if (y == 0) return 1;

    if (y % 2 != 0) {
      ans *= x;
      return recursion(x, y - 1);
    } else {
      return recursion(x * x, Math.floor(y / 2));
    }
  }
  recursion(x, y);
  return ans;
}

console.log(recursiveExponentiation(2, 10));

function prinReverse(n) {
  if (n == 0) return;
  console.log(n);
  return prinReverse(n - 1);
}

prinReverse(5);

/* No X */

let str = "ancxkxux";

function noX(str) {
  if (str.length === 0) return "";

  if (str[0] === "x") {
    return noX(str.slice(1));
  }
  return str[0] + noX(str.slice(1));
}

console.log(noX(str));

/* Count recursively the total number of "abc" and "aba" */

function countABC(str, i) {
  if (i > str.length - 3) return 0;

  if (
    (str[i] == "a" && str[i + 1] == "b" && str[i + 2] == "c") ||
    (str[i] == "a" && str[i + 1] == "b" && str[i + 2] == "a")
  ) {
    return 1 + countABC(str, i + 1);
  }

  return countABC(str, i + 1);
}

console.log(countABC("abaaba", 0));
console.log(countABC("abcxxabc", 0));

/* count x in string */

function countX(str) {
  if (str.length === 0) return 0;

  if (str[0] == "x") {
    return 1 + countX(str.slice(1));
  }
  return countX(str.slice(1));
}

console.log(countX("abcxxabc"));
console.log(countX("addthe"));

/* String Palindrome */

function palindromeStr(str, low, high) {
  if (low > high) {
    return true;
  }

  if (str[low] == str[high]) {
    return palindromeStr(str, low + 1, high - 1);
  } else {
    return false;
  }
}

let str2 = "abba";
console.log(palindromeStr(str2, 0, str2.length - 1));

/* question: given a  parenthesis sequence determine if its valid or not. */

function validParen(s) {
  if (s.length % 2 != 0) return false;
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        return false;
      }
    }
  }
  if (open == 0) return true;
  return false;
}
console.log(validParen("()()(())"));
console.log(validParen("())(())("));

/* generate all valid parenthesis of length n
n=4 */

let allPairs = [];

function generateParen(n, str = "", ind = 0, op = 0, close = 0) {
  if (op < close) {
    return;
  }

  if ((ind == n )) {
    if (op == close) {
      allPairs.push(str);
    }
    return;
  }

  generateParen(n, str + "(", ind + 1, op + 1, close);
  generateParen(n, str + ")", ind + 1, op, close + 1);
}

generateParen(4);
console.log(allPairs);
/* t.c:O(2^n)  s.c:O(n)*/

/* String permuatations */

let ans=[];
function swapStr(str,i,j){
    let arr=str.split("");
    [arr[i],arr[j]]=[arr[j],arr[i]];
     return arr.join("");

}
function stringPermutations(str,ind=0){
  
  if(ind == str.length-1){
    ans.push(str);
    return;
  }

  for(let i=ind;i<str.length;i++){
    let swapped = swapStr(str,i,ind);
    stringPermutations(swapped,ind+1);
  }
}

stringPermutations("abc");
console.log(ans);



/* string encoding */
let str="123";

function stringDecode(str,res="",result=[]){
    if(str.length === 0){
        result.push(res);
        return ;
    }
    
    ///for one digit
    let num1=parseInt(str[0]);
    if(num1>0){
        stringDecode(str.slice(1),res+String.fromCharCode(96+num1),result)
    }
    
    //for 2 digit
    if(str.length>=2){
    let num2=parseInt(str.slice(0,2));
    if(num2>=10 && num2<=26){
        stringDecode(str.slice(2),res+String.fromCharCode(96+num2),result)
    }
    }
    return result;
    
}

let ansarr=stringDecode(str);
ansarr.sort();
for(const values of ansarr){
    console.log(values);
} 

    /* a maze paths */

function mazePath(m,n,i=0,j=0,psf=""){
    if(i==m && j==n){
        console.log(psf);
        return;
    }
    
    if(i<m){
        mazePath(m,n,i+1,j,psf+"v");
    }
    if(j<n){
        mazePath(m,n,i,j+1,psf+"h");
    }
}

mazePath(1,1);

/* ----------------------------------contest on recursion----------------------- */

/* find substring using recursion */
let str="abc";

function substring(str){
    if(str.length==0){
        return ;
    }
    
    let k=1;
    while(k<=str.length){
        console.log(str.slice(0,k));
        k++;
    }
    substring(str.slice(1))
}

substring(str);

/* check weather a number is in fibonaci series or not */
let n=15;

function checkFib(n){
    function check(a,b){
        if(a==n) return true;
        if(a>n) return false;
        
        return check(b,a+b);
    }
    return check(0,1);
    
}

console.log(checkFib(n));


/* ---------------time complexity */
function solve(n) {
  if (n <= 1) return;
  solve(n / 2);
  solve(n / 2);
  for (let i = 0; i < n; i++) console.log(i);
}

/* solve(n) runs for 2^logn(base2)
for loop - O(n)
 -Each call runs a loop that depends on the current input size.
 -The input size halves with each recursive level.
 -The total work at each level sums to n.
--With logn- logn levels, total work is n×logn

 */


/* The function to calculate the points is defined as follows:

function calculatePoints(n) {
  if (n < 2) return n;
  let prevPoints = calculatePoints(n - 1);
  let prevPrevPoints = calculatePoints(n - 2);
  return prevPoints * prevPrevPoints + 1;
}
A customer has made 5 purchases. What is the exact total number of points earned by this customer? Explain each step of your calculation. 

ans=7
*/

