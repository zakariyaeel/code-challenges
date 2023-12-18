function pairElement(str) {
let arr = [...str];
arr.map((item,index) => {
  switch(item){
    case 'C':
      arr[index] = [item,'G'];
      break;
    case 'G':
      arr[index] = [item,'C'];
      break;
    case 'A':
      arr[index] = [item,'T'];
      break;
    case 'T':
      arr[index] = [item,'A'];
      break;
    default:
      break;
  }
})
  return arr;
}

console.log(pairElement("GCG"));
