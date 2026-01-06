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
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) 

}
humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice;

  } else {

    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;

  }