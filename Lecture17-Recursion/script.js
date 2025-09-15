/* compute T.C.  of the function  */

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

/* t.c:O(nlogn base4) */

/*  print the pattern. n==5; 
A
AB
BCD
CDEF
DEFGH
*/
let code = 97;
let c = 0;
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans += String.fromCharCode(code + c);
    c++;
  }
  c = i - 1;

  console.log(ans);
}

/* 
print the pattern n=3

     *
   *   *
 *       *
   *   * 
     * 
     
 */

// let n=3;
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
// for(let i=n-1;i>=1;i--){
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

/* longest substring without repeating character
str=abbcdac;
op:bcda(4)
 */

let str="abbcdac";

let maxlength=0;
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
            }
        }else{
            j=str.length;
        }
        
    }
    
}
 console.log(maxlength);