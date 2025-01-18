// create a function called getComputerChoice that randomly generates and returns "rock", "paper", or "scissors" as a string
let computerPlayer = getComputerChoice()
function getComputerChoice(computerPlayer) {
    let bop = Math.floor(Math.random()* 10) + 1;
    if (bop <= 4) {
        return  "rock"
    } else if (bop > 4 && bop <= 7) {
        return "paper"
    } else {
        return "scissors"
    }
}

//write a function called getHumanChoice that will take a users input/choice and returns it as a string.
function getHumanChoice(choice){
    let pChoice = prompt("Choose your weapon!: ");
    pChoice = pChoice.toLocaleLowerCase();
    if ((pChoice === "scissors") || (pChoice === "paper") || (pChoice === "rock")) {
        alert("You've chosen: " + pChoice + "!") 
        return pChoice 
    } else {
        alert("Invalid choice")
    }
    
    
}

//create a variable to keep track of the players score called humanScore
let humanScore = 0

let computerScore = 0
//create a variable to keep track of the computers score called computerScore
/*create a function that will play a single round called playRound.
define two parameters for playRound: humanChoice and computerChoice.
Use these two parameters to take the human and computer choices as arguments.
make the humanChoice case-insensitive so they can input any correctly spelled valid choice.
include a console.log to put a string value representing the winner/loser. example - "you lose, paper beats rock!"
increment the human or computer score variable based on the winner.*/

function playRound(humanChoice, computerChoice) {



    if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("You lose! Rock beats scissors")
        computerScore += 1
    } else if (humanChoice === "scissors" && computerChoice == "paper") {
        alert("You win! Scissors beats paper")
        humanScore += 1
    } else if (humanChoice === "scissors" && computerChoice == "scissors") {
        alert("Tie game!")
    } else if (humanChoice === "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats rock")
        computerScore += 1
    } else if (humanChoice === "rock" && computerChoice == "scissors") {
        alert("You win! Rock beats scissors")
        humanScore += 1
    } else if (humanChoice === "rock" && computerChoice == "rock") {
        alert("Tie game!")
    } else if (humanChoice === "paper" && computerChoice == "scissors") {
        alert("You lose! Scissors beats paper")
        computerScore += 1
    } else if (humanChoice === "paper" && computerChoice == "rock") {
        alert("You win! Paper beats rock")
        humanScore += 1
    } else if (humanChoice === "paper" && computerChoice == "paper") {
        alert("Tie game!")
    }
}



function playGame(){


    const computerSelection = getComputerChoice();

    const humanSelection = getHumanChoice();

    if (humanScore + computerScore !== 5){
        playRound
    } else if (humanScore + computerScore === 5){
        } if (humanScore > computerScore){
            alert("You Win!")
        } else alert("You Lose!")


}