// Simple Calculator in JavaScript

class Calculator {
  // Function to add two numbers
  add(a, b) {
    return a + b;
  }

  // Function to subtract two numbers
  subtract(a, b) {
    return a - b;
  }

  // Function to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Function to divide two numbers
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 5)); // 5
console.log(calc.multiply(3, 3)); // 9
console.log(calc.divide(10, 2)); // 5
// Handle division by zero
try {
  console.log(calc.divide(5, 0));
} catch (error) {
  console.error(error.message);
}