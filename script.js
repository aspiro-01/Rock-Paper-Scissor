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

// human choice

function getHumanChoice() {
    let promptMsg = prompt("Type either rock/paper/scissor to play!");
    promptMsg = promptMsg.toLowerCase()
    if (promptMsg === "rock" || promptMsg === "paper" || promptMsg === "scissor") {
        return promptMsg;
    } else {
        alert("Invalid option")
    }
    
}

let humanScore  = 0;
let computerScore = 0;


// function that will compare the human vs computer choice to find win, loose, or draw in the game.
// when this function is called it should update the score
 function playRound(humanChoice, computerChoice) {

    //rock materials
    if (humanChoice === "rock" && computerChoice === "rock"){
       console.log("Draw!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore = ++computerScore;
        console.log("You Loose!");
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore = ++humanScore;
        console.log("You Win!");
    }

    // paper materials
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = ++humanScore;
        console.log("You Win!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw!");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        computerScore = ++computerScore;
        console.log("You Loose!");
    }

    //scissor materials 
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        computerScore = ++computerScore;
        console.log("You Loose!");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore = ++humanScore;
        console.log("You Win!");
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        console.log("Draw!");
    } else {
        return "Something is wrong!";
    }
 }





function playGame() {
   
    for (let i = 0; i < 5; i++) {
    
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(`Game ${i+1}`);
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
        console.log("=========================================================")
    }

    
        if ( `${humanScore}` > `${computerScore}` ) {
        console.log("YOU ARE THE FINAL WINNER!");
        } else if ( `${humanScore}` < `${computerScore}` ) {
        console.log("Uh oh! Try again, computer won!")
        } else if ( `${humanScore}` === `${computerScore}` ) {
        console.log ("Wow, It was a tie!")
        } else {
        console.log("Something went wrong, couldn't calculate the winner :(!")
        }
    
} 
playGame();



/* if (playRound(humanSelection, computerSelection) === "You Win!") {
        return `Human Score: ${humanScore} = ++humanScore | Computer Score:" + ${computerScore} = computerScore;`
    } else if (playRound(humanSelection, computerSelection) === "You Loose!") {
        return "Human Score:" + humanScore | "Computer Score:" + ++computerScore;
    } else if (playRound(humanSelection, computerSelection) === "Draw!") {
        return "Human Score:" + humanScore | "Computer Score:" + computerScore;
    } else {
        return "Something is wrong!"
    } */ 