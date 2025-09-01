/* array day 2

 */


//calculating freq of elemnts in arr
// let arr = [1,2,1,4,2,2,4];
// asda
/*-----using map-----
 let map=new Map();

for(let i=0;i<arr.length;i++){
    let item = arr[i];
    if(map.has(item)){
        map.set(item,map.get(item)+1);
    }else{
        map.set(item,1);
    }
}
console.log(map); */

/* -------using object
let freq={};
for(let i=0;i<arr.length;i++){
    let elem = arr[i];
    if(freq[elem]){
        freq[elem]++;
    }else{
        freq[elem]=1;
    }
}
console.log(freq); */

let arr = [1,2,1,4,2,2,4];
let ans = new Array(arr.length).fill(0); 
for (let i = 0; i < arr.length; i++) {
    ans[arr[i]]++;
}
for (let i = 0; i < ans.length; i++) {
    if (ans[i] > 0) {
        console.log(`Frequency of ${i} is: ${ans[i]}`);
    }
}
    

