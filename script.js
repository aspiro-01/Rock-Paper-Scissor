//computer will randomly select rock paper scissor
let randomNumber = Math.floor(Math.random()*3+1);
function getComputerChoice() {
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissor";
    }
   
}
console.log(getComputerChoice())

// human input for the game
let input = prompt("Choose rock/ paper/ or scissor")
function getHumanChoice() {
    if (input === null) {
        return input;
    } else {
        input = input.toLowerCase();
    }

    let humanChoice = ''; 
    if (input === 'rock' || input === 'paper' || input === 'scissor') {
        inputChoice = input; 
    } else {
        alert("Please input the right choice")
    }
    return inputChoice;
}
console.log(getHumanChoice());

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;  

//Logic to play single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    //drawing results
    if (humanChoice === 'rock' & computerChoice === 'rock') {
        console.log('It\'s a Draw! You both picked Rock');
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanChoice === 'paper' & computerChoice === 'paper') {
        console.log('It\'s a Draw! You both picked Paper');
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanChoice === 'scissor' & computerChoice === 'scissor') {
        console.log('It\'s a Draw! You both picked Scissor');
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    }

    //winning results
    if (humanChoice === 'rock' & computerChoice === 'scissor') {
        ++humanScore; 
        console.log (`You win!!! Rock beats Scissor`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    } else if (humanChoice === 'paper' & computerChoice === 'rock') {
        ++humanScore; 
        console.log (`You win!!! Paper beats Rock`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }  else if (humanChoice === 'scissor' & computerChoice === 'paper') {
        ++humanScore; 
        console.log (`You win!!! Scissor beats paper`);
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    } 
}



   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));