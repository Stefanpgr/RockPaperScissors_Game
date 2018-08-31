const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  };
};

const getComputerChoice = (rock, paper, scissors) => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  //first condition
  if (userChoice === computerChoice) {
    return "Tie!";
    
  }
  // second condition
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return "You won! ;) ";
    }
  }

  //Third condition
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return "You won! ;) ";
    }
  }

  //Fourth condition
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return "You won! ;) ";
    }
  }

  //cheat
  if (userChoice === 'bomb') {
    return 'You won';
  }
}

const playRock = () => {
 let x = document.getElementsByName("rock").innerHTML = "rock";
  const userChoice = getUserChoice(x);
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  document.getElementById("p01").innerHTML = `You threw: ${userChoice}`;
  document.getElementById("p02").innerHTML = `The computer threw: ${computerChoice}`;
  document.getElementById("p03").innerHTML = `${winner}`;
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

function playPaper() {
 let y = document.getElementsByName("paper").innerHTML = "paper";
  const userChoice = getUserChoice(y);
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  document.getElementById("p01").innerHTML = `You threw: ${userChoice}`;
  document.getElementById("p02").innerHTML = `The computer threw: ${computerChoice}`;
  document.getElementById("p03").innerHTML = `${winner}`;
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

const playSci = () => {
  let z = document.getElementsByName("sci").innerHTML = "scissors";
   const userChoice = getUserChoice(z);
   const computerChoice = getComputerChoice();
   const winner = determineWinner(userChoice, computerChoice);
   document.getElementById("p01").innerHTML = `You threw: ${userChoice}`;
   document.getElementById("p02").innerHTML = `The computer threw: ${computerChoice}`;
   document.getElementById("p03").innerHTML = `${winner}`;
   console.log(`You threw: ${userChoice}`);
   console.log(`The computer threw: ${computerChoice}`);
   console.log(determineWinner(userChoice, computerChoice));
 };
playRock();
playSci();
playPaper();
//console.log(determineWinner('paper', 'scissors'));
//console.log(getComputerChoice());
//console.log(getUserChoice('rock'));