function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

try {
  console.log(add(5, '3')); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}
