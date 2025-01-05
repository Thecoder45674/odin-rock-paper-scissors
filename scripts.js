// Select all buttons inside the buttons div
const buttons = document.querySelectorAll(".buttons button");

// Initialize the scores
let computerScore = 0;
let humanScore = 0;

// Attach the event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", playRound);
});

// Generates a random integer from 0 to max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Gets the computer's choice: Rock, Paper, or Scissors
function getComputerChoice() {
    const computerSelection = getRandomInt(3);

    if (computerSelection === 0) return "Rock";     // 0 -> Rock
    if (computerSelection === 1) return "Paper";    // 1 -> Paper
    return "Scissors";                              // 2 -> Scissors
}

// Plays a single round of Rock-Paper-Scissors
function playRound(event) {
    humanSelection = event.target.innerText;
    computerSelection = getComputerChoice();
    
    const resultElement = document.getElementById("result");

    // Check the game outcome
    if (humanSelection == computerSelection) {
        resultElement.innerText = `It is a tie!`;
    } else if (humanSelection === "Rock" && computerSelection === "Scissors" ||
                humanSelection === "Paper" && computerSelection === "Rock" || 
                humanSelection === "Scissors" && computerSelection === "Paper" ) {
        resultElement.innerText = `You win this round! ${humanSelection} beats ${computerSelection}.`;
        incrementButton('human');
    } else {
        resultElement.innerText = `You lose this round! ${computerSelection} beats ${humanSelection}.`;
        incrementButton('computer');
    }
}

function incrementButton(user) {
    if (user == 'human') {
        humanScore++;
        document.getElementById("humanscore").innerText = humanScore;
    } else if (user == 'computer') {
        computerScore++;
        document.getElementById("computerscore").innerText = computerScore;
    }
}