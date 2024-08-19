"use strict";

function getComputerChoice() {
  let rpsArr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * 3);
  return rpsArr[randomNum];
}

function getHumanChoice() {
  let userInput = prompt("(Rock, Paper, Scissors) Pick One:");
  return userInput.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        console.log("Draw!");
      } else if (computerChoice === "PAPER") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
      } else if (computerChoice === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
      }
      break;
    case "PAPER":
      if (computerChoice === "ROCK") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
      } else if (computerChoice === "PAPER") {
        console.log("Draw!");
      } else if (computerChoice === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
      }
      break;
    case "SCISSORS":
      if (computerChoice === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
      } else if (computerChoice === "PAPER") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
      } else if (computerChoice === "SCISSORS") {
        console.log("Draw!");
      }
      break;
  }
}
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;
let computerScore;
let humanScore;

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(humanSelection(), computerSelection());
  }
  if (humanScore === 3) {
    alert("You Win!!!");
  } else if (computerScore === 3) {
    alert("You Lose!!");
  }
  alert(`Your Score: ${humanScore}
Computer Score: ${computerScore}`);
}
playGame();
