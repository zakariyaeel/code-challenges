function orbitalPeriod(arr) {
  let newArr =[];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = 2 * Math.PI;
  arr.map( item => {
    let a = Math.pow(item.avgAlt+earthRadius,3);
    let c = Math.sqrt(a / GM);
    item.avgAlt = Math.round(pi * c);

    newArr.push({name: item.name, orbitalPeriod : item.avgAlt})
  })
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
