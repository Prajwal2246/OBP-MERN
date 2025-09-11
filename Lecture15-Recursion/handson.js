/* write a recursive function to find the sum of first n natural numbers */

function sumOFNaturalNumbers(n){
    if(n<=0) return 0;
 return n+sumOFNaturalNumbers(n-1);
}
// console.log(sumOFNaturalNumbers(5)); //15

/* ============================================GCD=========================== */

function gcdWhile(a,b){

    while(a!=0){
        let temp=a;
        a=b%a;
        b=temp
    }
    return b;
}

console.log(gcdWhile(8,32)); //8

function gcdRecursion(a,b){
    if(a==0) return b;

    return gcdRecursion(b%a,a);
}
console.log(gcdRecursion(8,32)); //8

/* GCD of Array */
let arr = [27,12,18,24,30];
let currGCD=0;

for(let i=0;i<arr.length;i++){
    currGCD = gcdRecursion(arr[i],currGCD);
}
console.log({currGCD});


/* 
fibonacci series 
 time complexity : O(2^n)


 Time Complexity:
  10^7 or 10^8 se  badi nh ho skti
*/

function power(a,b){
  /* using while
   let result=1;
  while(b!=0){
    result*=a;
    b--;
  }
  return result; */

  /* using for
   let result=1;
  for(let i=0;i<b;i++){
    result*=a;
  }
  return result; */

  /* using recursion */
  if(b==0) return 1;
  return a*power(a,b-1);
}
console.log(power(2,3));

function powerExponentiation(a,b){

    // let temp=powerExponentiation(a,Math.floor(b/2));
    // return temp*temp**(n%2);

    if(b==0) return 1;
    if(b==1) return a;

    if(b%2 != 0){
        return a*powerExponentiation(a,b-1);
    }else{
        return powerExponentiation(a*a,Math.floor(b/2));
    }


}
console.log("power Exponentiation: ",powerExponentiation(2,3));

