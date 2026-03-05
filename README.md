# 🎮 Hangman Game - Web Application

A beginner-friendly, fully functional Hangman game built with HTML, CSS, and JavaScript. Guess letters to uncover the hidden word before the hangman is complete!

## 📋 Project Overview

This is a classic Hangman game implemented as a web application. Players guess letters one at a time to reveal a hidden word. Each wrong guess adds a part to the progressively drawn hangman. The game ends when the player either successfully guesses the word or runs out of attempts.

### Features

✨ **Core Features:**
- 🎯 Random word selection from a 20-word dictionary
- 📊 Real-time game display with underscores for hidden letters
- ⌨️ Interactive alphabet buttons (A-Z)
- 🎨 ASCII art hangman drawing stages (7 stages)
- 📈 Attempts counter showing remaining guesses
- 📝 Display of all guessed letters (correct and incorrect)
- 🏆 Win and lose conditions with appropriate messages
- 🔄 Play Again button to start a new game
- ⌨️ Keyboard support for letter input

🚀 **Enhanced Features:**
- 🌟 Score tracking system
- 🎚️ Three difficulty levels (Easy: 6, Medium: 5, Hard: 4 attempts)
- 🎯 Difficulty-based scoring bonus
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🎨 Modern, gradient UI with smooth animations
- 🌈 Color-coded feedback (success, error, info messages)

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling, flexbox, grid, animations, and responsive design
- **JavaScript (ES6+)** - Game logic, event handling, and state management

## 📂 Project Structure

```
hangman-web-app/
├── index.html           # Main HTML file with game structure
├── style.css            # CSS styling and responsive design
├── script.js            # Main game logic and interactivity
├── words.js             # Word list and random selection
├── hangmanStages.js     # ASCII art hangman stages
└── README.md            # Project documentation
```

### File Descriptions

- **index.html**: Contains the complete HTML structure including game display areas, buttons, and message sections
- **style.css**: Comprehensive styling with variables, animations, and mobile responsiveness
- **script.js**: Game logic including word selection, letter guessing, state management, and UI updates
- **words.js**: Array of 20 words and function to select a random word
- **hangmanStages.js**: ASCII art representations of the 7 hangman stages

## 🚀 How to Run

### Option 1: Using Live Server (Recommended)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The game opens automatically in your browser

### Option 2: Direct Browser

1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser
3. The game will load and be ready to play

### Option 3: Local Server (Python)

If you have Python installed:

```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

## 🎮 How to Play

1. **Start**: A random word is selected and displayed as underscores
2. **Guess**: Click an alphabet button or type a letter on your keyboard
3. **Feedback**: 
   - ✓ Correct guess highlights in blue
   - ✗ Wrong guess highlights in red
4. **Track Progress**: 
   - Watch the hangman drawing appear with each wrong guess
   - See your score accumulate with correct guesses
5. **Win**: Successfully guess all letters before running out of attempts
6. **Lose**: The hangman drawing completes (7 wrong guesses) before finding all letters
7. **Play Again**: Click the "Play Again" button to start a new game

## 🎯 Difficulty Levels

- **Easy** (Default): 6 attempts - Earn 10 points per remaining attempt
- **Medium**: 5 attempts - Earn 10 points per remaining attempt + 10 bonus
- **Hard**: 4 attempts - Earn 10 points per remaining attempt + 20 bonus

Change difficulty before starting a new game!

## 📊 Scoring System

- Base Points: 10 × (Attempts Remaining)
- Medium Difficulty Bonus: +10 points
- Hard Difficulty Bonus: +20 points

**Example Scores:**
- Easy, 5 attempts left: 50 points
- Medium, 4 attempts left: 50 points (40 + 10 bonus)
- Hard, 3 attempts left: 50 points (30 + 20 bonus)

## 🎨 Word List

The game includes 20 words from various tech and everyday categories:

```
python, computer, science, hangman, program
javascript, developer, algorithm, function, variable
database, network, browser, keyboard, monitor
software, hardware, internet, website, application
```

## ⌨️ Keyboard Support

Type any letter (A-Z) on your keyboard to make a guess. This works the same as clicking the alphabet buttons.

## 🎨 UI/UX Design

- **Gradient Background**: Purple gradient for visual appeal
- **Card Layout**: Clean, centered container with shadow effects
- **Color Coding**:
  - Primary (Purple): Main interactive elements
  - Success (Green): Correct guesses and win messages
  - Error (Red): Wrong guesses and lose messages
  - Info (Blue): Information messages
- **Smooth Animations**: Slide and fade effects for UI elements
- **Responsive Design**: Adapts to all screen sizes (mobile-first approach)

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with optimal spacing
- **Tablet** (≤600px): Adjusted font sizes and button layout
- **Mobile** (≤400px): Compact layout with smaller text and touched-up spacing

## 🔧 Code Quality

- Clean, modular JavaScript with clear function organization
- Comprehensive comments explaining major code sections
- Beginner-friendly variable and function names
- Separation of concerns: data (words.js), stages (hangmanStages.js), logic (script.js), styling (style.css)
- ES6+ features: const/let, arrow functions, template literals, destructuring

## 🚀 Game Flow Diagram

```
Start Game
    ↓
Select Random Word
    ↓
Display Word as Underscores
    ↓
[Guessing Loop]
  → Player Guesses Letter
  → Check if in Word
  ├─ Correct: Mark letter, update display
  └─ Wrong: Increment wrong guesses, update hangman
    ↓
Check Win Condition: All letters guessed?
├─ YES → Display Win Message, Award Points
└─ NO → Check Lose Condition: Max wrong guesses reached?
        ├─ YES → Display Lose Message, Show Word
        └─ NO → Continue Guessing [Loop]
    ↓
Show Play Again Button
    ↓
Player Clicks Play Again → Start New Game
```

## 🎓 Learning Points

This project demonstrates:

✅ DOM manipulation and event handling  
✅ Game state management  
✅ User input validation  
✅ Conditional logic and loops  
✅ Array methods (map, filter, includes, every)  
✅ String manipulation  
✅ CSS flexbox and grid layouts  
✅ Responsive web design  
✅ Keyboard event handling  
✅ Animations and transitions  

## 🔮 Future Enhancements

Potential features for future versions:

- 🔊 Sound effects for correct/wrong guesses
- 🌙 Dark mode toggle
- ⏱️ Timer for speed challenges
- 🏅 Leaderboard with local storage
- 🎯 Category-based word selection
- 🌍 Multiplayer mode
- 📊 Game statistics and history
- 🎨 Themes and customization
- 🔤 Multiple language support
- 🖼️ Custom hangman drawings

## 📝 Code Structure Example

```javascript
// Game State Management
let gameState = {
    word: '',
    guessedLetters: [],
    correctLetters: [],
    // ... more properties
};

// Initialization
function initGame() { }

// Game Actions
function guessLetter(letter, btn) { }
function updateDisplay() { }
function checkGameStatus() { }
function endGame(isWin) { }
```

## 🐛 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a beginner-friendly web development project.

## 🙏 Acknowledgments

- Built with HTML5, CSS3, and vanilla JavaScript
- No external libraries or frameworks required
- Inspired by the classic Hangman word-guessing game

---

**Enjoy playing Hangman! 🎮**

For questions or suggestions, feel free to explore the code and customize it for your needs!
