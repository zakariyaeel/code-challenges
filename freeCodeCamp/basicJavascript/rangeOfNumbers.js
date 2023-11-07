// range of numbers using recursion
function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
  return [];
  }else{
    const p = rangeOfNumbers(startNum+1,endNum);
    p.unshift(startNum);
    return p;
  }
};

console.log(rangeOfNumbers(6,9))
