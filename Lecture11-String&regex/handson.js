/* armstrnong number */
/* Armstrong Numbers in Range
You are given two numbers m and n, you are required to print all the 
Armstrong Numbers between m and n (both inclusive).
Armstrong Numbers are numbers those have the sum of their own digits raised to the power
number of digits equals the number itself. Eg. 153 = 13 + 53 + 33, so 153 is an Armstrong number. */

// let m = 0,
  n = 160;

function Armstrong(m, n) {
  let ans = [];
  for (let i = m; i <= n; i++) {
    let temp = i;
    let n = i;
    let length = 0;

    //calculate length of every digit
    while (n > 0) {
      n = Math.floor(n / 10);
      length++;
    }

    //calculate the power aaddition
    n = temp;
    let poweradd = 0;
    while (n > 0) {
      let digit = Math.floor(n % 10);
      poweradd += Math.pow(digit, length);
      n = Math.floor(n / 10);
    }
    n = temp;
    if (poweradd === n) {
      ans.push(n);
    }
  }
//   console.log(ans.toString().replaceAll(","," "));
console.log(ans.join(" "));

}

Armstrong(m, n);

/* --------------------------------------Prime Function */

function isPrime(n) {
  if (n == 1) {
    return false;
  }

  /*. way1- sqrt(n)
   for(let i=2;i<Math.sqrt(n);i++){
    if(n%2 === 0){
        return false
    }
  } */

  /* way2 */
  for (let i = 2; i * i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(n));

/* 
1
12
234
3456
45678
   */

let m=5;

function printPattern(m){
    console.log("1");
    for(let i=1;i<=m;i++){
      let ans="";
      for(let j=i;j<i+i+1;j++){
        ans+=j;
      }
      console.log(ans);
      
    }
    
}

printPattern(m)