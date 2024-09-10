"use strict";

const buttons = document.querySelectorAll(".choices");
const score = document.querySelector("#score");
const result = document.querySelector("#currentResult");
const overall = document.querySelector("#overallResult");
const tryAgainBtn = document.querySelector("#try-again");

let computerScore = 0;
let humanScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (const button of buttons) {
      if (computerScore >= 5 || humanScore >= 5) {
        button.disabled = true;
      }
    }
  });
});

tryAgainBtn.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.disabled = false;
    tryAgain();
  });
});

function playRound(humanChoice) {
  let userChoice = humanChoice.target.id;
  let computerChoice = getComputerChoice();
  switch (userChoice) {
    case "rock":
      if (computerChoice === "rock") {
        result.textContent = "Draw";
      } else if (computerChoice === "paper") {
        result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
      } else if (computerChoice === "scissors") {
        result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        humanScore++;
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        humanScore++;
      } else if (computerChoice === "paper") {
        result.textContent = "Draw!";
      } else if (computerChoice === "scissors") {
        result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
      } else if (computerChoice === "paper") {
        result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        humanScore++;
      } else if (computerChoice === "scissors") {
        result.textContent = "Draw!";
      }
      break;
  }
  score.textContent = `Your Score: ${humanScore}\n
  Computer Score: ${computerScore}`;
  if (humanScore >= 5 && humanScore > computerScore) {
    overall.textContent = "Winner: You Win";
  } else if (computerScore >= 5 && humanScore < computerScore) {
    overall.textContent = "Winner: Computer";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function tryAgain() {
  computerScore = 0;
  humanScore = 0;

  score.textContent = "Your Score: 0 Computer Score: 0";
  result.textContent = "";
  overall.textContent = "";
}
