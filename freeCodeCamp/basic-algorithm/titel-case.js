function titleCase(str) {
let arr = str.split(' ');
for(let i=0;i<arr.length;i++){
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length).toLowerCase();
}
  return arr.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));
