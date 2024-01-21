
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const resultOutput = document.getElementById('resultOutput');
const possibleChoices = document.querySelectorAll('button');
let player = "";
let computer = "";
let result = "";

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  
  if (randomNum === 1) computer = "rock";
  else if (randomNum === 2) computer = "paper";
  else computer = "scissors";

  computerChoice.innerHTML = computer;
}

function getResult() {
  if (computer === player) result = "It's a tie!";
  else if (
    (computer === 'rock' && player === 'paper') ||
    (computer === 'paper' && player === 'scissors') ||
    (computer === 'scissors' && player === 'rock')
  ) result = "You win!";
  else result = "You lose!";

  resultOutput.innerHTML = result;
}

possibleChoices.forEach(choice => {
  choice.addEventListener('click', () => {
    player = choice.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
  });
});
