function whatIsInAName(collection, source) {
  let prop = Object.keys(source);
  return collection.filter(item => prop.every(key => item[key] === source[key]));
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
