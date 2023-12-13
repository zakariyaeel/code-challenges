const squareList = arr => {
  // Only change code below this line
  let filtredArr = arr.filter(item => item>0 && Number.isInteger(item));
  let squared = filtredArr.reduce((arr,item)=>{
    return arr.concat(item*item)
  },[]);
  return squared;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
