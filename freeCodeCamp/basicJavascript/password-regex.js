let sampleWord = "astronaut";
let pwRegex = /(?=\w{3,})(?=\D+\d{2})/; // pw regex
let result = pwRegex.test(sampleWord);
