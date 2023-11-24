let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // the correct regex
let result = userCheck.test(username);
console.log(result);
