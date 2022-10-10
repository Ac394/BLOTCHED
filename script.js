// Declare Variables
let randomNumber;
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundNumber;
let result = ''
const modal = document.getElementById("myModal");
    
// Button Event Listeners
let rock = document.getElementById('ultra');
rock.addEventListener('click', () => { setChoice("ROCK"); startGame(); });

let paper = document.getElementById('sneak');
paper.addEventListener('click', () => { setChoice("PAPER"); startGame(); });

let scissors= document.getElementById('dom');
scissors.addEventListener('click', () => { setChoice("SCISSORS"); startGame();});

// Set user choice from button
function setChoice(choice) {
  if (choice === 'ROCK') {
    return playerSelection = 'ROCK'
  } else if (choice === 'PAPER') {
    return playerSelection = 'PAPER'
  } else if (choice === 'SCISSORS') {
    return playerSelection = 'SCISSORS'
  }
}

// Generate a random integer between two values
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}


//Convert random integer to Rock-Scissor-Paper
function getComputerChoice(randomNumber) {
  if (randomNumber === 1) {
    computerSelection = 'ROCK';
  }
  else if (randomNumber === 2) {
    computerSelection = 'SCISSORS';
  }
  else if (randomNumber === 3) {
    computerSelection = 'PAPER';
  }
  return computerSelection
}

function enemyImg(computerSelection) {
  if (computerSelection === 'ROCK') {
    document.getElementById("enemy").src="img/ORANGE.jpg";
  } else if (computerSelection === 'PAPER') {
    document.getElementById("enemy").src="img/YELLOW.jpg";
  } else if (computerSelection === 'SCISSORS') {
    document.getElementById("enemy").src="img/BLUE.jpg";
  }
}
// Game rules
function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
    ++playerScore;
    return result = 'You win!';
  }
  else if (playerSelection === computerSelection) {
    return result = 'It\'s a tie!';
  }
  else {
    ++computerScore;
    return result = 'You lose!';
  }
}

// Check who is the final winner
function checkWinner() {
    if (playerScore === 5) {
      close2.style.display = "block";      
      document.getElementById("winner2").textContent = 'You won!';
    } else if (computerScore === 5) {
      close2.style.display = "block";      
      document.getElementById("winner2").textContent = 'You lost...';
    }
}

// Replay function
function playAgain() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  document.getElementById("score").textContent = '00:00';
  close2.style.display = "none";
  document.getElementById("enemy").src="img/enemy.jpg";
}

// Functions that run the game
function startGame () {
  if (playerScore < 5 && computerScore < 5) {
    getRandomIntInclusive(1,3);
    getComputerChoice(randomNumber);
    playRound(playerSelection, computerSelection);
    document.getElementById("result").innerText = result;
    document.getElementById("score").textContent = `0${playerScore}:0${computerScore}`;
    enemyImg(computerSelection);
  }
    checkWinner()    
}