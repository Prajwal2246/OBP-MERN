/* questionn
 given a variable name, seperated by space using 2 fucntions 1 for invert this varivalename to camelcase 2 for convert this variable to snake case

 "student*first*name". * denotes space 
 camelcase :  studentFirstName
 snakecase : student_first_name
 */

let obj = {
  camel: function (str) {
    let ans = "";
    /* let uppercase = false;
  for(let i=0;i<str.length;i++){
    if(str[i] === " "){
        uppercase=true;
    }else{
        if(uppercase){
            ans+=str[i].toUpperCase();
            uppercase=false;
        }else{
            ans+=str[i];
        }
    }
  }
  return ans; */

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
  snake: function (str) {
    /*  let ans="";
   for(let i=0;i<str.length;i++){
    if(str[i] === " "){
        ans+="_";
    }else{
        ans+=str[i];
    }
   }
   return ans; */

    return str.trim().replaceAll(" ", "_");
  },
};

// let str = "student first name";
// console.log(obj.camel(str));
// console.log(obj.snake(str));

/* 
q1:reverse  a string 
q2:check if string is palindrome
q3:find the no of words in a string
q4:find the largest word in a string
q5:function to find the first non repeating charater
*/



let str = "Hello worlds";

function rev(str) {

   /*  return str.trim().split("").reverse().join(""); */

  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

console.log(rev(str));

let str2="appa";
function checkPalindrome(str2){
    /* for(let i=0;i<Math.floor(str2.length/2);i++){
        if(str2[i]!==str2[str2.length-1-i]){
            return "not Palindrome"
        }
    }
    return " Palindrome" */
    const revString = rev(str2);
    return revString == str2;
}

console.log(checkPalindrome(str2));
 

function noOfWords(str){
   /*  return str.trim().split(" ").length; */
   let count=0;
   for(let i=0;i<str.length;i++){
    if(str[i] === " "){
        count++;
    }
   }
   return count+1;
}
console.log(noOfWords(str))

function largestWord(str) {
    let words = str.split(" ");
    let largest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > largest.length) {
            largest = words[i];
        }
    }

    return largest;
}
console.log(largestWord(str));


let str3="aabbcdde";
function nonrepeatchar(str3) {
  for (let i = 0; i < str3.length; i++) {
    const char = str3[i];
    
    if(str3.indexOf() === str3.lastIndexOf(char)){
        return char;
    }
  }
  return null; 
}

console.log(nonrepeatchar(str3));





