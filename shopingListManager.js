/**
 * Grocery Shopping List Manager
 * Demonstrates JavaScript array methods (push, pop, shift, unshift)
 * Shows how to build and modify a shopping list dynamically
 */

console.log("Grocery shopping list");

// Initialize empty shopping list array
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

// Add first item to the list
shoppingList.push("Apples");

/**
 * Formats the shopping list for display
 * @param {Array} arr - The shopping list array
 * @returns {string} Formatted shopping list message
 */
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

// Add another fruit to the end of the list
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

// Add cooking oil to the beginning of the list (high priority item)
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// Add multiple snack items to the end of the list
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

// Remove the last item (Potato Chips) from the list
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

// Add dessert to the beginning of the list
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

// Remove the first item (Chocolate Cake) from the list
shoppingList.shift();
// Replace the first item (Vegetable Oil) with a healthier option
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));
