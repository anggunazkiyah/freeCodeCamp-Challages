const questions = [
  {
    category: "Language",
    question: "What's the oldest language on this earth?",
    choices: [
      "Japanese",
      "Persian",
      "Egyptian"
    ],
    answer: "Egyptian"
  },
  {
    category: "Language",
    question: "Which ancient language is still spoken today and has one of the longest continuous literary traditions?",
    choices: [
      "Latin",
      "Greek",
      "Hebrew"
    ],
    answer: "Greek"
  },
  {
    category: "Language",
    question: "What writing system was used in ancient Mesopotamia?",
    choices: [
      "Hieroglyphs",
      "Cuneiform",
      "Linear A"
    ],
    answer: "Cuneiform"
  },
  {
    category: "Language",
    question: "Which language family do most European languages belong to?",
    choices: [
      "Sino-Tibetan",
      "Indo-European",
      "Niger-Congo"
    ],
    answer: "Indo-European"
  },
  {
    category: "Language",
    question: "What is the study of ancient languages and texts called?",
    choices: [
      "Philology",
      "Anthropology",
      "Etymology"
    ],
    answer: "Philology"
  }
];

// Function to get a random question from the array
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Function to get a random computer choice
function getRandomComputerChoice(availableChoice) {
  const randomIndex = Math.floor(Math.random() * availableChoice.length);
  return availableChoice[randomIndex];
}

// Function to get results - takes question object and computer's choice
function getResults(questionObject, computerChoice) {
  if(computerChoice === questionObject.answer) { 
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`; 
  }
}

// Test the functions:
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log("Question:", randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log("Result:", result);
