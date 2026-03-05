// Hangman drawing stages
// Updated after each wrong guess

const hangmanStages = [
  // Stage 0 - Empty (6 attempts left)
  `
    ------
    |    |
    |
    |
    |
    |
    ---------
  `,

  // Stage 1 - Head (5 attempts left)
  `
    ------
    |    |
    |    O
    |
    |
    |
    ---------
  `,

  // Stage 2 - Body (4 attempts left)
  `
    ------
    |    |
    |    O
    |    |
    |
    |
    ---------
  `,

  // Stage 3 - Left Arm (3 attempts left)
  `
    ------
    |    |
    |    O
    |   /|
    |
    |
    ---------
  `,

  // Stage 4 - Right Arm (2 attempts left)
  `
    ------
    |    |
    |    O
    |   /|\\
    |
    |
    ---------
  `,

  // Stage 5 - Left Leg (1 attempt left)
  `
    ------
    |    |
    |    O
    |   /|\\
    |   /
    |
    ---------
  `,

  // Stage 6 - Right Leg - GAME OVER (0 attempts left)
  `
    ------
    |    |
    |    O
    |   /|\\
    |   / \\
    |
    ---------
  `
];

// Function to get hangman stage
function getHangmanStage(incorrectGuesses) {
  // Limit to maximum stage
  const stageIndex = Math.min(incorrectGuesses, hangmanStages.length - 1);
  return hangmanStages[stageIndex];
}
