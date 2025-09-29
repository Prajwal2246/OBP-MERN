/* question1 */
/* Anagram Strings */

let arr = [cat, tea, pet, tac, act, eat];
for (let i = 0; i < arr.length; i++) {
  let curr = arr[i];
  
}

function isAnagram(a, b) {
  if (a.length != b.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    let c = map.get(a[i]) ? map.set(a[i]) : 0;
    map.set(a[i],c+1);
  }

  for(let i=0;i<b.length;i++){
    if(map.has(b[i])){
        map.set(b[i],map.get(b[i])-1);
    }else{
        return false;
    }
  }
  for(let value of map.values()){
    if(value != 0){
        return false;
    }
  }
    return true;
}
