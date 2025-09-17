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
