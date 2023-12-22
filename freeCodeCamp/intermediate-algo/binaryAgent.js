function binaryAgent(str) {
  let binArr = str.split(' ');
  // now we return the str into array of digits
  let dec = 0;
  let res = [];
  for(let i=0;i<binArr.length;i++){
    let arr = binArr[i].split('').reverse().join('');
    for(let j=0;j<arr.length;j++){
      dec += parseInt(arr[j]) * Math.pow(2,j);
    }
    res.push(String.fromCharCode(dec));
    dec = 0;
  }
  return res.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
