console.log("Hello World")

let humanScore = 0;
let computerScore = 0;
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);  

function getComputerChoice() {

  let randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";  
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
 let humanChoice = prompt("Choose wisely: rock, paper or scissors");
  return humanChoice ? humanChoice.toLowerCase() : "rock";

}