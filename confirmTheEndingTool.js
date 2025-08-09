// Build a Confirm the Ending Tool
// This function checks if a string ends with the given target string

// Function implementation
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

// Test cases
console.log(confirmEnding("Bastian", "n"));                    // Expected: true
console.log(confirmEnding("Connor", "n"));                     // Expected: false  
console.log(confirmEnding("He has to give me a new name", "name")); // Expected: true
console.log(confirmEnding("Abstraction", "action"));           // Expected: true
