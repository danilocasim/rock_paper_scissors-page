"use strict";

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");
const result = document.querySelector("#currentResult");
const overall = document.querySelector("#overallResult");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function playRound(humanChoice) {
  let computerScore = 0;
  let humanScore = 0;

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
