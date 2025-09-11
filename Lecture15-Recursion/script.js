/* write a recursive function to find the sum of first N natual numbers */
let n = 10;
function SumofNNaturalNumbers(n) {
  if (n <= 0) return 0;

  return n + SumofNNaturalNumbers(n - 1);
}

// console.log(SumofNNaturalNumbers(n));

/* ----------------------------------- note:  gcd mtlb aisa sabse bada number jo dono ko divide krta ho */
/*  
 gcd(8,32)=8;
 gcd(9,15)=3;
 gcd(30,30)=30; 

*/

/* gcd using while */
// function gcd(a, b) {
//     while(a!=0){
//         let temp=a;
//         a=b%a;
//         b=temp;
//     }
//     return b;
// }

/* gcd using recursion */ //t.c:O(n)
function gcd(a, b) {
  if (a == 0) {
    return b;
  }

  return gcd(b % a, a);
}

console.log(gcd(8, 32)); //8
console.log(gcd(25, 15)); //5
console.log(gcd(36, 60)); //12
console.log(gcd(35, 5)); //5


/* 
gcd of more than 2 number
gcd(a,b,c) = gcd( (gcd(a,b),c) )
 */

/* GCD of an array */
let arr = [27,12,18,24,30];
let currGcd = 0;

for(let i=0;i<arr.length;i++){
    currGcd = gcd(currGcd,arr[i]);
}
console.log("gcd of arr: ",{currGcd});

/* 
fibonacci series 
 0 , 1 (by default diya rhega vrna apn le lenge)
t.c:O(2 raised to n)
*/

/* note
t.c 10^7 or 10^8 se badi nh ho skti */
let a=2;
let b=10;

function power(a,b){
  /*  let result = 1;
   for(let i=0;i<b;i++){
    result*=a;
   }
   return result; */

   let result =1;
   while(n--) result  *=a;
   return result;
}
console.log(power(a,b));

/* powerExponential */
let x=7;
let y=5;

function powerExponential(x,y){
    if(y==0) return 1;
    if(y==1) return x;

/*     let temp = powerExponential(a,Math.floor(y/2));
    return temp * temp * x ** (n%2); */
    
    if(y %2 != 0){
        return x*powerExponential(x,y-1);
    }else{
        return powerExponential(x*x,Math.floor(y/2));
    }
    
}
console.log(powerExponential(x,y));


