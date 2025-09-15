/* time complexity of below function */
function recursion(n) {
  if (n == 0) return;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);

  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

/* 
 t.c. :O(nlogn base 4)
for diagram explanation refer 
  https://onedrive.live.com/view.aspx?resid=9301DDF91216653A!sb227bf0bf059482889cb4b1151f25ea8&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy85MzAxRERGOTEyMTY2NTNBL0VndV9KN0paOENoSWljdExFVkh5WHFnQkFBRE4tRnJMUWtGcDBRamhvc3RiT1E&wd=target%28Lecture%2017.one%7Ce87c9049-e039-f640-9231-d682b46c123b%2FUntitled%20Page%7C188894c1-5d85-be49-aa47-80db6b83f8a4%2F%29&wdorigin=NavigationUrl
 */

/* 

print pattern n=5;
*
**
***
****
*****

code:
let n=5;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}


print the pattern.
a
bc
def
ghij
klmno

code:
let n=5;
let charCode=97;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(charCode);
        charCode++;
    }
    console.log(row);
}

print the pattern. n==5; 
A
AB
BCD
CDEF
DEFGH

code:
let n=5;
let charCode=97;
let char=0;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(charCode+char);
        char++; 
    }
  char=i-1;
    console.log(row);
}
*/

/* 
print the pattern n=3

     *
   *   *
 *       *
   *   * 
     * 
     
 */
// let n=5;
// for(let i=1;i<=n;i++){
//     let ans="";
//     for(let j=1;j<=n-i;j++){
//         ans+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j==1 || j==2*i-1){
//             ans+="*";
//         }else{
//             ans+=" ";
//         }
//     }
//     console.log(ans);
// }
// for(let i=n;i>=1;i--){
//     let ans="";
//     for(let j=1;j<=n-i;j++){
//         ans+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j==1 || j==2*i-1){
//             ans+="*";
//         }else{
//             ans+=" ";
//         }
//     }
//     console.log(ans);
// }


/*longest substring without repeating character
str=abbcdac;
op:bcda(4)  */
let str="abbcdac";

let maxlength=0;
let longestSubstring="";
for(let i=0;i<str.length;i++){
    let substring="";
    let set=new Set();
    for(let j=i;j<str.length;j++){
        let char = str[j];
        if(!set.has(char)){
            set.add(char);
            substring+=char;
            
            if(substring.length >maxlength){
                maxlength=substring.length;
                longestSubstring=substring;
            }
        }else{
            j=str.length;
        }   
    }
}
console.log(maxlength);
console.log(longestSubstring);
