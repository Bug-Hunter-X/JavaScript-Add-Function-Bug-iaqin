function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// This is where the bug occurs
console.log(add(5, '3')); //Output: 53