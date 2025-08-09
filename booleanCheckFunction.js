// Build a Boolean Check Function
// This function checks if a value is classified as a boolean primitive (true/false)

// Function implementation
function booWho(boo) {
  if(typeof boo === 'boolean') {
    return true;
  } else {
    return false;
  }
}

// Test cases - verify the function works correctly
console.log(booWho(true));        // Expected: true
console.log(booWho(false));       // Expected: true  
console.log(booWho([1, 2, 3]));   // Expected: false (array)
console.log(booWho("a"));         // Expected: false (string)
console.log(booWho([].slice));    // Expected: false (function)
console.log(booWho({ "a": 1 }));  // Expected: false (object)
console.log(booWho("true"));      // Expected: false (string, not boolean)
