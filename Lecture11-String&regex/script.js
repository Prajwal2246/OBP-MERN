function isPrime(n) {
  if(n == 1){
    return false;
  }
 /*  for (let i = 2; i <=Math.floor(Math.pow(n, 0.5)); i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  } */

    for (let i = 2; i*i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
 
}

// let n=17;
// console.log(isPrime(n));

/* t.c - O(sqrt(n))
   s.c - O(1)
 */


/* question 2 */
/*
1
12
234
3456
45678
  */

let n=5;

function printPattern(n){
    console.log("1");
    for(let i=1;i<=n;i++){
      let ans="";
      for(let j=i;j<i+i+1;j++){
        ans+=j;
      }
      console.log(ans);
      
    }
    
}

printPattern(n)
