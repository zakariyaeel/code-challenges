function sumPrimes(num) {
  let sum = 0;
  for(let i=1;i<=num;i++){
    if(checkPrime(i)){
      sum += i;
    }
  }

  return sum;
}

function checkPrime(num){
  for(let i=2,s = Math.sqrt(num);i<=s;i++){
  let calc = num%i;
    if(calc === 0 ){
      return false
    }
  }
  
  return num >=2;
}
console.log(sumPrimes(10));
