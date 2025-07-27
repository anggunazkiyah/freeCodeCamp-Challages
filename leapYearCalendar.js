const year = 2024;

function isLeapYear(number) {
  if (number % 4 === 0) {
    // If divisible by 100, it must also be divisible by 400 to be a leap year
    if (number % 100 === 0) {
      if (number % 400 === 0) {
        return number + " is a leap year.";
      } else {
        return number + " is not a leap year.";
      }
    } else {
      return number + " is a leap year.";
    }
  } else {
    return number + " is not a leap year.";
  }
}

const result = isLeapYear(year);
console.log(result); // Output: 2024 is a leap year.

const result2000 = isLeapYear(2000);
console.log(result2000); // Output: 2000 is a leap year.

const result1900 = isLeapYear(1900);
console.log(result1900); // Output: 1900 is not a leap year.
