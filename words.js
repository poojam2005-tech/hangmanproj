// List of words for the Hangman game
// Players will guess letters to find these hidden words

const wordsList = [
  'python',
  'computer',
  'science',
  'hangman',
  'program',
  'javascript',
  'developer',
  'algorithm',
  'function',
  'variable',
  'database',
  'network',
  'browser',
  'keyboard',
  'monitor',
  'software',
  'hardware',
  'internet',
  'website',
  'application'
];

// Function to get a random word from the list
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  return wordsList[randomIndex].toUpperCase();
}
