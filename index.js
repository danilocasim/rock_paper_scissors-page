"use strict";

const buttons = document.querySelectorAll("button");
const result = document.querySelector("div");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
let humanScore = 0;
let computerScore = 0;

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
}
