// Simple function
function add(a, b) {
  return a + b;
}

// Function returning a function (closure)
function makeMultiplier(factor) {
  return function (x) {
    return x * factor; // 'factor' is remembered (closure)
  };
}

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE runs immediately when defined.");
})();

// Example usage
const sum = add(2, 3);
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("sum:", sum);
console.log("double(5):", double(5));
console.log("triple(5):", triple(5));
