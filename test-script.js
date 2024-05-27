console.log("Hello World!")

function allOver() {
let number = Math.floor(Math.random()*100); 
let chooseNumber = prompt('Choose a Number between 1 and 100' )

console.log(number);

function random(a, b) {
    if (a > b) {
        console.log( "Random number is grater than the number you chose" );
    } else if (a === b) {
        console.log("They are equal to each other")
    } else {
        console.log("Random number is less than your number")
    }
}

let compNumber = number;
let input = chooseNumber;

random(compNumber, input);
}
for (let i=0; i<5; i++) {
    allOver();
}
