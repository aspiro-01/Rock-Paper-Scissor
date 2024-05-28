//computer choice
function getComputerChoice() {
    let randomNumber= Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissor"
    }

}
console.log(getComputerChoice())

// human choice
let promptMsg = prompt("Type either rock/paper/scissor to play!");
function getHumanChoice() {
    promptMsg = promptMsg.toLowerCase()
    if (promptMsg === "rock" || promptMsg === "paper" || promptMsg === "scissor") {
        return promptMsg;
    } else {
        alert("Invalid option")
    }
    
}
console.log(getHumanChoice());

// function that will compare the human vs computer choice to find win, loose, or draw in the game.
// when this function is called it should update the score
 function playRound(humanChoice, computerChoice) {
    
    //rock materials
    if (humanChoice === "rock" && computerChoice === "rock"){
        return "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "You Loose!";
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        return "You Win!";
    }

    // paper materials
    else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You Win!";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "Draw!";
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        return "You Loose!";
    }

    //scissor materials 
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        return "You Loose!";
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        return "You Win!";
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        return "Draw!";
    } else {
        return "Something is wrong!";
    }
 }
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

 console.log(playRound(humanSelection, computerSelection));