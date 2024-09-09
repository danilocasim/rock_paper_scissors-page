"use strict";

const buttons = document.querySelectorAll("button");
const result = document.querySelector("div");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const computerSelection = getComputerChoice;
let humanScore;
let computerScore;

function getHumanChoice(button) {
  return button.id;
}

function getComputerChoice() {
  let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * rockPaperScissors.length);
  return rockPaperScissors[random];
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        console.log("Draw!");
      } else if (computerChoice === "PAPER") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      } else if (computerChoice === "SCISSORS") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      }
      break;

    case "PAPER":
      if (computerChoice === "ROCK") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      } else if (computerChoice === "PAPER") {
        console.log("Draw!");
      } else if (computerChoice === "SCISSORS") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      }
      break;

    case "SCISSORS":
      if (computerChoice === "ROCK") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      } else if (computerChoice === "PAPER") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      } else if (computerChoice === "SCISSORS") {
        console.log("Draw!");
      }
      break;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  playRound(humanSelection(), computerSelection());
  showOverallResult(humanScore, computerScore);
}
playGame();
