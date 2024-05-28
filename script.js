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
let computerChoice = getComputerChoice();
console.log(getComputerChoice())

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
