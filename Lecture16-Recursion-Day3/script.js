function main() {
  let arr = ["cat", "tac", "tea", "act", "eat"];
  let checkArr = ["cat", "tca", "eee", "tea"];

  for(let i=0;i<checkArr.length;i++){
    let ans=[];
    for(let j=0;j<arr.length;j++){
        if(anagram(checkArr[i],arr[j])){
            ans.push(arr[j]);
        }
    }
    if(ans.length ==0){
        console.log("-1");
    }else{
        console.log(ans.sort().join(" "))
    }
  }
}
function anagram(s1, s2) {
  if (s1.length != s2.length) return false;
  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
      map.set(s1[i], (map.get(s1[i]) || 0) + 1);
    
  }
  for (let i = 0; i < s2.length; i++) {
    if (map.has(s2[i])) {
      map.set(s1[i], map.get(s1[i]) - 1);
    }
  }

  for (let value of map.values()) {
    if (value != 0) {
      return false;
    }
  }
  return true;
}

main();
