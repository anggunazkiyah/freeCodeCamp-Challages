// Build a Truncate String Algorithm

function truncateString(str, num) {
  if(str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//Tests
const str = "This world need more kindes.";
const num = 19;
console.log(truncateString(str, num)); // Output: This world need mor...

const string = "Viva Palestina";
const number = 14;
console.log(truncateString(string, number)); // Output: Viva Palestina
