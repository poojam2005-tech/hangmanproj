/* ==========================================
   HANGMAN GAME - Main Game Logic
   ========================================== */

// ==========================================
// GAME STATE VARIABLES
// ==========================================

let gameState = {
    word: '',                      // Current word to guess
    guessedLetters: [],           // All guessed letters
    correctLetters: [],           // Correctly guessed letters
    incorrectLetters: [],         // Incorrectly guessed letters
    wrongGuesses: 0,              // Number of wrong guesses
    maxWrongGuesses: 6,           // Maximum attempts (0-6 = 7 stages)
    gameActive: true,             // Game is in progress
    difficulty: 'easy',           // Difficulty level
    score: 0,                     // Player's score
    gamesWon: 0,                  // Number of games won
};

// Difficulty settings
const difficultySettings = {
    easy: { maxWrong: 6, words: [] },
    medium: { maxWrong: 5, words: [] },
    hard: { maxWrong: 4, words: [] }
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const wordDisplay = document.getElementById('wordDisplay');
const hangmanDrawing = document.getElementById('hangmanDrawing');
const attemptsLeft = document.getElementById('attemptsLeft');
const guessedLettersDisplay = document.getElementById('guessedLetters');
const alphabetButtons = document.getElementById('alphabetButtons');
const gameMessage = document.getElementById('gameMessage');
const playAgainBtn = document.getElementById('playAgainBtn');
const newGameBtn = document.getElementById('newGameBtn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const scoreDisplay = document.getElementById('score');
const difficultyDisplay = document.getElementById('difficulty');

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Initialize the game
 * Sets up event listeners and creates alphabet buttons
 */
function initGame() {
    createAlphabetButtons();
    setupEventListeners();
    startNewGame();
}

/**
 * Create alphabet buttons (A-Z)
 */
function createAlphabetButtons() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'letter-btn';
        btn.dataset.letter = letter;
        btn.addEventListener('click', () => guessLetter(letter, btn));
        alphabetButtons.appendChild(btn);
    });
}

/**
 * Setup event listeners for buttons
 */
function setupEventListeners() {
    playAgainBtn.addEventListener('click', startNewGame);
    newGameBtn.addEventListener('click', startNewGame);

    // Difficulty buttons
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => changeDifficulty(e.target.dataset.difficulty));
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        const letter = e.key.toUpperCase();
        if (/^[A-Z]$/.test(letter) && gameState.gameActive) {
            const btn = document.querySelector(`[data-letter="${letter}"]`);
            if (btn && !btn.disabled) {
                guessLetter(letter, btn);
            }
        }
    });
}

/**
 * Change difficulty level
 */
function changeDifficulty(level) {
    if (!gameState.gameActive) {
        gameState.difficulty = level;
        difficultySettings.easy.maxWrong = 6;
        difficultySettings.medium.maxWrong = 5;
        difficultySettings.hard.maxWrong = 4;
        gameState.maxWrongGuesses = difficultySettings[level].maxWrong;
        
        // Update UI
        difficultyBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-difficulty="${level}"]`).classList.add('active');
        difficultyDisplay.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        
        startNewGame();
    }
}

// ==========================================
// GAME FUNCTIONS
// ==========================================

/**
 * Start a new game
 * Reset all game variables and update UI
 */
function startNewGame() {
    gameState.word = getRandomWord();
    gameState.guessedLetters = [];
    gameState.correctLetters = [];
    gameState.incorrectLetters = [];
    gameState.wrongGuesses = 0;
    gameState.gameActive = true;

    // Set max wrong guesses based on difficulty
    switch (gameState.difficulty) {
        case 'medium':
            gameState.maxWrongGuesses = 5;
            break;
        case 'hard':
            gameState.maxWrongGuesses = 4;
            break;
        default:
            gameState.maxWrongGuesses = 6;
    }

    // Reset UI
    clearMessages();
    enableAllLetterButtons();
    updateDisplay();

    // Debug: Show word in console (remove in production)
    console.log('Word:', gameState.word);
}

/**
 * Process a letter guess
 * @param {string} letter - The guessed letter
 * @param {HTMLElement} btn - The button element clicked
 */
function guessLetter(letter, btn) {
    // Check if letter already guessed
    if (gameState.guessedLetters.includes(letter)) {
        showMessage('You already guessed ' + letter + '!', 'info');
        return;
    }

    // Record the guess
    gameState.guessedLetters.push(letter);

    // Check if letter is in word
    if (gameState.word.includes(letter)) {
        gameState.correctLetters.push(letter);
        btn.classList.add('correct');
        showMessage('✓ Good guess!', 'success');
    } else {
        gameState.incorrectLetters.push(letter);
        gameState.wrongGuesses++;
        btn.classList.add('incorrect');
        showMessage('✗ Wrong guess!', 'error');
    }

    // Disable the button
    btn.disabled = true;

    // Update display
    updateDisplay();

    // Check win/lose conditions
    checkGameStatus();
}

/**
 * Update all display elements
 */
function updateDisplay() {
    updateWordDisplay();
    updateHangmanDrawing();
    updateAttemptsDisplay();
    updateGuessedLettersDisplay();
}

/**
 * Update the word display with guessed letters
 * Shows underscores for unguessed letters
 */
function updateWordDisplay() {
    const display = gameState.word
        .split('')
        .map(letter => gameState.correctLetters.includes(letter) ? letter : '_')
        .join(' ');
    
    wordDisplay.textContent = display;
}

/**
 * Update the hangman drawing based on wrong guesses
 */
function updateHangmanDrawing() {
    hangmanDrawing.textContent = getHangmanStage(gameState.wrongGuesses);
}

/**
 * Update the attempts display
 */
function updateAttemptsDisplay() {
    attemptsLeft.textContent = gameState.maxWrongGuesses - gameState.wrongGuesses;
}

/**
 * Update the guessed letters display
 */
function updateGuessedLettersDisplay() {
    if (gameState.guessedLetters.length === 0) {
        guessedLettersDisplay.innerHTML = '<span style="color: var(--text-light);">None yet</span>';
    } else {
        guessedLettersDisplay.innerHTML = gameState.guessedLetters
            .map(letter => {
                const isCorrect = gameState.correctLetters.includes(letter);
                return `<span class="letter ${isCorrect ? '' : 'incorrect'}">${letter}</span>`;
            })
            .join('');
    }
}

/**
 * Check win/lose conditions
 */
function checkGameStatus() {
    // Check for win
    if (gameState.word.split('').every(letter => gameState.correctLetters.includes(letter))) {
        endGame(true);
    }
    // Check for lose
    else if (gameState.wrongGuesses >= gameState.maxWrongGuesses) {
        endGame(false);
    }
}

/**
 * End the game
 * @param {boolean} isWin - Whether the player won
 */
function endGame(isWin) {
    gameState.gameActive = false;

    if (isWin) {
        // Calculate points: (attempts left) * 10 + (difficulty bonus)
        let points = (gameState.maxWrongGuesses - gameState.wrongGuesses) * 10;
        if (gameState.difficulty === 'medium') points += 10;
        if (gameState.difficulty === 'hard') points += 20;

        gameState.score += points;
        gameState.gamesWon++;
        scoreDisplay.textContent = gameState.score;

        showMessage(`🎉 Congratulations! You guessed the word: ${gameState.word}. You earned ${points} points!`, 'success');
    } else {
        showMessage(`💀 Game Over! The word was: ${gameState.word}`, 'error');
    }

    // Show/hide buttons
    disableAllLetterButtons();
    playAgainBtn.style.display = 'inline-block';
}

/**
 * Display a message to the user
 * @param {string} message - The message text
 * @param {string} type - The message type (success, error, info)
 */
function showMessage(message, type = 'info') {
    gameMessage.textContent = message;
    gameMessage.className = `game-message show ${type}`;

    // Auto-hide after 3 seconds (except for game end messages)
    if (type !== 'success' && type !== 'error') {
        setTimeout(() => clearMessages(), 3000);
    }
}

/**
 * Clear all messages
 */
function clearMessages() {
    gameMessage.classList.remove('show');
    gameMessage.textContent = '';
}

/**
 * Enable all letter buttons
 */
function enableAllLetterButtons() {
    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
}

/**
 * Disable all letter buttons
 */
function disableAllLetterButtons() {
    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.disabled = true;
    });
}

// ==========================================
// GAME START
// ========================================== 

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initGame);
