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


// studenntgrade classification using switch case
function grade(N) {
    let result;

    switch (true) {
        case (N > 90):
            result = "Excellent";
            break;
        case (N > 80 && N <= 90):
            result = "Good";
            break;
        case (N > 70 && N <= 80):
            result = "Fair";
            break;
        case (N > 60 && N <= 70):
            result = "Meets Expectations";
            break;
        default:
            result = "Below Expectations";
    }

    return result;
}

// Example usage:
console.log(grade(95)); // Excellent
console.log(grade(85)); // Good
console.log(grade(75)); // Fair
console.log(grade(65)); // Meets Expectations
console.log(grade(50)); // Below Expectations




function triangleType(a, b, c) {
    let largest = Math.max(a, b, c);
    let sumSquares = a * a + b * b + c * c;
    let otherSquares = sumSquares - largest * largest;

    let result;

    switch (true) {
        case (largest * largest === otherSquares):
            result = 2; // right-angled
            break;
        case (largest * largest > otherSquares):
            result = 3; // obtuse-angled
            break;
        default:
            result = 1; // acute-angled
    }

    return result;
}

console.log(triangleType(3, 4, 5)); // 2 (right) - 5² = 25, 3² + 4² = 25
console.log(triangleType(2, 2, 3)); // 3 (obtuse) - 3² = 9, 2² + 2² = 8, so 9 > 8
console.log(triangleType(3, 5, 7)); // 3 (obtuse) - 7² = 49, 3² + 5² = 34, so 49 > 34
console.log(triangleType(3, 4, 4)); // 1 (acute) - 4² = 16, 3² + 4² = 25, so 16 < 25



//Anagram
function isAnagram(a,b){
  if(a.length!=b.length){
    return false;
  }
  let map=new Map();
  for(let i=0;i<a.length;i++){
    let c=map.has(a[i])?map.get(a[i]):0;
    map.set(a[i],c+1);
  }
  for(let i=0;i<b.length;i++){
    if(map.has(b[i])){
      map.set(b[i],map.get(b[i])-1);
    }
    else{
      return false;
    }
  }
  for(let num of map.values()){
    if(num!=0){
      return false;
    }
  }
  return true;
}