function getIndexToIns(arr, num) {
  sortArr(arr);
  let pos = arr.length;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=num){
      return i;
    }
  }
  return pos;
}

function sortArr(arr){
  for(let i=1;i<arr.length;i++){
    for(let j=i-1;j>=0;j--){
    if(arr[j+1] < arr[j]){
      // swapping
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
    }
  }
}

console.log(getIndexToIns([2, 20, 10], 19));
