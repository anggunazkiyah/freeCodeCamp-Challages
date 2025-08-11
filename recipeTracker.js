/**
 * Recipe Management System
 * A simple JavaScript application for managing and calculating recipe metrics
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Initialize empty array to store all recipes
const recipes = [];

// Recipe 1: Italian pasta dish
const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22, // in minutes
  totalIngredients: null, // to be calculated
  difficultyLevel: '', // to be determined based on cooking time
  ratings: [4, 5, 4, 5], // user ratings out of 5
  averageRating: null, // to be calculated
};

// Recipe 2: Asian-inspired curry dish
const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42, // in minutes
  totalIngredients: null, // to be calculated
  difficultyLevel: '', // to be determined based on cooking time
  ratings: [4, 5, 5, 5], // user ratings out of 5
  averageRating: null, // to be calculated
};

// Recipe 3: Quick vegetarian option
const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15, // in minutes
  totalIngredients: null, // to be calculated
  difficultyLevel: '', // to be determined based on cooking time
  ratings: [4, 3, 4, 5], // user ratings out of 5
  averageRating: null, // to be calculated
};

// Add all recipe objects to the recipes array
recipes.push(recipe1, recipe2, recipe3);

/**
 * Calculates the average rating from an array of ratings
 * @param {number[]} ratings - Array of rating numbers
 * @returns {number} Average rating value
 */
function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return total / ratings.length;
}

/**
 * Counts the total number of ingredients in a recipe
 * @param {string[]} ingredients - Array of ingredient names
 * @returns {number} Total count of ingredients
 */
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

/**
 * Determines difficulty level based on cooking time
 * @param {number} cookingTime - Cooking time in minutes
 * @returns {string} Difficulty level: 'easy', 'medium', or 'hard'
 */
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

// Calculate and display recipe1 metrics
const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating); // Display average rating

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients); // Display ingredient count

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel); // Display difficulty level

// Update recipe1 object with calculated values
recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// Update recipe2 object with calculated values
recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// Update recipe3 object with calculated values
recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// Note: Duplicate code block removed for recipe3 (was duplicated in original)

// Display the complete recipes array with all calculated values
console.log(recipes);
