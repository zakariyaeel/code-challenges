// Only change code below this line
function countdown(n){
  if(n<1){
    return [];
  }else{
    const p = countdown(n-1);
    p.unshift(n);
    return p;
  }
}
// Only change code above this line
console.log(countdown(5))
