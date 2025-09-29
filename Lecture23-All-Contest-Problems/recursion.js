/* contest questions */

/* question1 */
let n = 13;

function isFib(n, i = 0, j = 1) {
  if (n == 0 || n == 1) return true;
  let sum = i + j;
  if (sum == n) return true;
  if (sum > n) return false;
  return isFib(n, j, sum);
}
console.log(isFib(n));
console.log(isFib(6));
console.log(isFib(12));
console.log(isFib(13));

/* question2 */
function substrings(str, i = 0, ans = []) {
  if (i === str.length) return ans;

  for (let j = i + 1; j <= str.length; j++) {
    ans.push(str.slice(i, j));
  }

  return substrings(str, i + 1, ans);
}

console.log(substrings("banana"));

/* question 4 */
function solve(n) {
  if (n <= 1) return;
  solve(n / 2);
  solve(n / 2);
  for (let i = 0; i < n; i++) console.log(i);
}

//t.c:O(nlogn) at each level we have n/2 elements i.e. logn
//solve(n/2) -> O(2^logn(base2))
