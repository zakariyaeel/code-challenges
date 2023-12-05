function mutation(arr) {
  let arr2 = [...arr[1]];
  for(let i in arr2){
    if(!arr[0].toUpperCase().includes(arr2[i].toUpperCase())){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
