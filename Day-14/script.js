// Generate random number (1-100)
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 7;
let gameOver = false;

function checkGuess() {

  if (gameOver) return;

  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠ Please enter a number between 1 and 100";
    message.style.color = "#ef4444";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts!`;
    message.style.color = "#22c55e";
    gameOver = true;
  } 
  else if (guess > secretNumber) {
    message.textContent = "📉 Too High! Try again.";
    message.style.color = "#ef4444";
  } 
  else {
    message.textContent = "📈 Too Low! Try again.";
    message.style.color = "#ef4444";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;

  if (attempts >= maxAttempts && guess !== secretNumber) {
    message.textContent = `💀 Game Over! The number was ${secretNumber}`;
    message.style.color = "#ef4444";
    gameOver = true;
  }

  guessInput.value = "";
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;

  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";

  console.log("New Secret Number:", secretNumber);
}