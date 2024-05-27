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

function getHumanChoice() {
    let promptMsg = prompt("Type either rock/paper/scissor to play!");
    if (promptMsg === null) {
        return promptMsg;
    } else {
        promptMsg = promptMsg.toLowerCase();
    }

    if (promptMsg === "rock" || promptMsg === "paper" || promptMsg === "scissor") {
        console.log(promptMsg);
    } else {
        alert("Invalid option");
    }
}
console.log(getHumanChoice());