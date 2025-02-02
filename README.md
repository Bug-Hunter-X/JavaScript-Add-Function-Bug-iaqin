# JavaScript Add Function Bug

This repository contains a simple JavaScript program with a bug in the `add` function. The bug occurs when the function receives a string as an argument instead of a number. This leads to unexpected behavior where the string gets concatenated with the number instead of an error being thrown.

## Bug Description
The `add` function is supposed to add two numbers. However, if a string is passed as one of the arguments, JavaScript's loose typing allows string concatenation instead of throwing a TypeError.  This is unexpected for users who expect stricter behavior around type errors.

## Bug Solution
The provided solution adds input type validation to prevent unexpected string concatenation.  This ensures that the function only operates on numbers and throws an error if invalid input is given.

## How to run the code
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the fixed code.
4. Use a JavaScript environment (like Node.js or a browser's console) to run both files and compare the outputs. 
