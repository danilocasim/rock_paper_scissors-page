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
        alert(`Draw!
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "PAPER") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        alert(`You Lose! Paper beats Rock
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;

        alert(`You Win! Rocks beats Scissors
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      }

      break;

    case "PAPER":
      if (computerChoice === "ROCK") {
        console.log("You Win! Paper beats Rock");
        humanScore++;

        alert(`You Win! Paper beats Rock
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "PAPER") {
        console.log("Draw!");
        alert(`Draw!
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;

        alert(`You Lose! Scossors beats Paper
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      }

      break;

    case "SCISSORS":
      if (computerChoice === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;

        alert(`You Lose! Rock beats Scissors
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "PAPER") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;

        alert(`You Win! Scissors beats Paper
Your Score: ${humanScore}
Computer Score ${computerScore}`);
      } else if (computerChoice === "SCISSORS") {
        console.log("Draw!");
        alert(`Draw!
Your Score: ${humanScore}
Computer Score ${computerScore}`);
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

  for (let i = 0; i < 10; i++) {
    playRound(humanSelection(), computerSelection());

    if (humanScore === 3) {
      alert(`WINNER WINNER CHICKEN DINNER!
Your Score: ${humanScore}
Computer Score: ${computerScore}`);
      break;
    } else if (computerScore === 3) {
      alert(`GAME OVER!
Your Score: ${humanScore}
Computer Score: ${computerScore}`);
      break;
    }
  }
}
playGame();
