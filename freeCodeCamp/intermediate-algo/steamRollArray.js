function steamrollArray(arr) {
  let newArr= [];
  arr.map((item,idx) => {
    if(Array.isArray(item)){
      newArr.push(...steamrollArray(arr[idx]));
    }else{
      newArr.push(item);
    }
  })
  return newArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
