function sumFibs(num) {
  let n1 = 0, n2 = 1,next;
  let fib = [];
  for(let i=0;i<=num;i++){
    if(n1<= num){
    fib.push(n1);
    }
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  
  return fib.reduce((x,item) => {
    if(item % 2){
     x+=item;
    }
    return x;
  },0)
}

console.log(sumFibs(10));
