function fearNotLetter(str) {
  
  let arr = [];
  for(let i =65;i<91;i++){
    arr.push(String.fromCharCode(i).toLowerCase());
  }
  let start = arr.indexOf(str[0]);
  let end = arr.indexOf(str[str.length-1]);
  let arr2 = arr.slice(start,end);
  
  let res = arr2.filter(item => !str.includes(item))
  return res.length !== 0?res.join():undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
