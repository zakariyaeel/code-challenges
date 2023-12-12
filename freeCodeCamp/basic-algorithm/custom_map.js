Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item,idx,arr)=>newArray.push(callback(item,idx,arr)));
  // Only change code above this line
  return newArray;
};
