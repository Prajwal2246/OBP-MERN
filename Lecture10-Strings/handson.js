/* "student*first*name". * denotes space 
 camelcase :  studentFirstName
 snakecase : student_first_name */
let obj = {
  camelcase: function (str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        ans += str[i + 1].toUpperCase();
        i++;
      } else {
        ans += str[i];
      }
    }
    return ans;
  },
  snakeCase: function (str) {
    return str.trim().replaceAll(" ", "_");
  },
};
let str = "hello world welcome to mern";
// console.log(obj.camelcase(str));  t.c.: O(n) sc:O(n)
// console.log(obj.snakeCase(str));  t.c.: O(n) sc:O(n)

console.log(str);
/* Reverse a string  */
function reverseString(str) {
  /* return str.trim().split(" ").reverse().join(" "); */
  let ans = "";
  for (let i = str.length-1; i >=0; i--) {
    ans += str[i];
  }
  return ans;
}
// console.log(reverseString(str));


/* palindrome check */
function palindrome(str){
  let rev = reverseString(str);
  return rev===str;

}
// console.log(palindrome(str));

/* No of words */
function noOfWords(str){
  str=str.trim();
  return str.split(" ").length;
}
// console.log(noOfWords(str));

/* largestWord */
function largestWordInString(str){
    let words=str.trim().split(" ");
    let largest=words[0];
  for(let i=0;i<words.length;i++){
    if(words[i].length>largest.length){
        largest=words[i];
    }
  }
  return largest;
}

// console.log(largestWordInString(str));

/* nonrepeatchar */

function nonrepeatCharInString(str){
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return char;
        }
    }
    return null;
}

// console.log(nonrepeatCharInString(str));



/* indexOf ---> indexOf(searchValue, fromIndex) */
let str2="hello Aditi";
console.log(str2.length);
console.log(str2.indexOf(0,1));   //-1
console.log(str2.indexOf("a",1)); //-1
console.log(str2.indexOf("A",1)); //6 
console.log(str2.indexOf("A",7)); //-1
console.log(str2.indexOf("A",6)); //6
console.log(str2.indexOf("A",12));//-1
console.log(str2.indexOf("A","12"));//-1
console.log(str2.indexOf("A","5")); //6 /* str2.indexOf("A", "5") */
console.log(str2.indexOf("A","A")); //6
console.log(str2.indexOf("A","O")); //6   /* Number("O") -> NaN -> str2.indexOf("A", NaN) ->  str2.indexOf("A", 0)  */


/* hw: revreese each word of a string  
string : "hi i'm prajwal
op:"ih m'i lawjarp"
*/

function reverseEachWord(str){
    let ans = "";
    let words=str.trim().split(" ");
    for(let i=0;i<words.length;i++){
        let revWord=reverseString(words[i]);
        ans+=revWord +" ";
    }
  return ans;
}

console.log(reverseEachWord(str));
