// Function to convert Celsius to Fahrenheit
function convertCtoF(num) {
  return ((num * 9 / 5) + 32);
}

const num = 0;

console.log(convertCtoF(num));    // Expected output: 32 (0°C)
console.log(convertCtoF(-10));    // Expected output: 14
console.log(convertCtoF(-30));    // Expected output: -22
console.log(convertCtoF(20));     // Expected output: 68
console.log(convertCtoF(30));     // Expected output: 86
