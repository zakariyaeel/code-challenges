function diffArray(arr1, arr2) {
  const newArr = [];
  let na1 = arr1.filter(item => ! arr2.includes(item));
  let na2 = arr2.filter(item => !arr1.includes(item));
  newArr.push(...na1,...na2)
  return  newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
