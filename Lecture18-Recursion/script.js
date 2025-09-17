/* 
question: given a  parenthesis sequence determine if its valid or not.
*/

let s = "()()(())";
let p = "())()";
let r = "())(())(";
let t = "))()";

function isValid(s) {
  if (s.length % 2 !== 0) return false;
  let countleft = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      countleft++;
    } else {
      if (countleft > 0) {
        countleft--;
      } else {
        return false;
      }
    }
  }

  if (countleft === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid(s));
console.log(isValid(p));
console.log(isValid(r));
console.log(isValid(t));

/* 
generate all valid parenthesis of length n
n=4
 */

let n = 4;
let allvalid = [];
function generateParenthesis(n, str = "", ind = 0, open = 0, close = 0) {
  if (open < close) {
    return;
  }

  if (ind === n) {
    if (open == close) {
      allvalid.push(str);
    }

    return;
  }

  generateParenthesis(n, str + "(", ind + 1, open + 1, close);
  generateParenthesis(n, str + ")", ind + 1, open, close + 1);
}

generateParenthesis(4);
console.log(allvalid);
/* t.c.: O(2^n) s.c.:O(n) */

/* let n=4;

function generateParenthesis(n, str = "", ind = 0, open = 0, close = 0,valid=[]) {
  if (open < close) {
    return;
  }

  if (ind === n) {
    if (open != close) {
      return;
    }

    valid.push(str);
    return valid;
  }

  generateParenthesis(n, str + "(", ind + 1, open + 1, close,valid);
  generateParenthesis(n, str + ")", ind + 1, open, close + 1,valid);
}


console.log(generateParenthesis(4)); */

/* -------------- String Permutations--------- */


function swapStr(str,i,j){
    let arr=str.split("");
    [arr[i],arr[j]]=[arr[j],arr[i]];
     return arr.join("");

}
let ans=[];
function generatePermutations(str, j = 0) {
  if(j==str.length-1) {
      ans.push(str);
      return;
  }
      
  for (let i = j; i < str.length; i++) {
    let swapped=swapStr(str,i,j);

    generatePermutations(swapped, j + 1);
  }
}

generatePermutations("abc");
console.log(ans);
 

