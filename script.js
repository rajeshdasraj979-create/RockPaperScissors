const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("Computer-score");
const messageEl = document.getElementById("message");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

// Random computer choice
function getComputerChoice() {
  const options = ["rock", "paper", "scisiors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Determine who wins
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  }
  if (
    (userChoice === "rock" && computerChoice === "scisiors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scisiors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Update the game result
function updateGame(result, userChoice, computerChoice) {
  if (result === "win") {
    userScore++;
    userScoreEl.textContent = userScore;
    messageEl.textContent = `🔥 You Win! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!` ; messageEl.style.color = "lime";
  } else if (result === "lose") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    messageEl.textContent = `💀 You Lose! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}!;`
    messageEl.style.color = "red";
  } else {
    messageEl.textContent = `😐 It's a Draw! You both chose ${userChoice.toUpperCase()}.`;messageEl.style.color = "yellow";
  }
}

// Add click events to all choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    updateGame(result, userChoice, computerChoice);
  });
});

// Reset button
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  messageEl.textContent = "Make your move!";
  messageEl.style.color = "cyan";
});