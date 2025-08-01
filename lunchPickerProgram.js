const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}
addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger")); // retrun: ["Pizza", "Tacos", "Burger"]

// Second function
function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}
addLunchToStart(lunches, "Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza")); // return: ["Pizza", "Burger", "Sushi"] 

//Thrid Function
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedLunch = arr.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return arr;
  }
}

removeLastLunch(["Stew", "Soup", "Toast"]); // return: Toast removed from the end of the lunch menu.
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"])); // Logs: Noodles removed from the end of the lunch menu.
// Returns: ["Sushi", "Pizza"]

// fifth function
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedFirst = arr.shift();
    console.log(`${removedFirst} removed from the start of the lunch menu.`);
    return arr;
  }
}

removeFirstLunch(["Salad", "Eggs", "Cheese"]); // retrun: Sushi removed from the start of the lunch menu.
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"])); // return: [ 'Pizza', 'Burger' ]

// six function 
function getRandomLunch (arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return null;
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomLunch = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
    return randomLunch;
  }
}

getRandomLunch(["Pizza", "Burger", "Sushi"]);

//seven function 
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    const lunchMenu = arr.join(", ");
    console.log(`Menu items: ${lunchMenu}`);
  }
}

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]); // log: Menu items: Pizza, Burger, Fries, Salad
