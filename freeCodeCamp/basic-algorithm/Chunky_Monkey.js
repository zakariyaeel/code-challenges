function chunkArrayInGroups(arr, size) {
  let arr1 = []
  let arrOff = [];
  for(let i in arr){
    arr1.push(arr[i]);
    if(arr1.length === size){
      arrOff.push(arr1)
      arr1 = []
    }
  }
  if(arr1.length !== 0){
  arrOff.push(arr1);
  }
  return arrOff;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
