/* backtracking */

/* print all subset
arr=[1,2,3];
 */

let arr=[1,2,3];

function subset(arr,subsetArr=[],ind=0){
  
    if(ind==arr.length){
        console.log(subsetArr);
        return;
    }

    subset(arr,[...subsetArr,arr[ind]],ind+1);
    subset(arr,subsetArr,ind+1);


}

subset(arr);