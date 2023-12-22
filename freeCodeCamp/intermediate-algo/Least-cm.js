function smallestCommons(arr) {
  // Sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // Create an array with all numbers in the range
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  // Function to calculate the greatest common divisor (GCD)
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Function to calculate the least common multiple (LCM)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Calculate the LCM for all numbers in the range
  var multiple = range[0];
  for (var j = 1; j < range.length; j++) {
    multiple = lcm(multiple, range[j]);
  }

  return multiple;
}

// Example usage
console.log(smallestCommons([1, 5])); // Output: 60
