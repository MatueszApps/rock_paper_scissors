function getComputerChoice() {
    // Array containing the choices
    const choices = ["rock", "paper", "scissors"];
    
    // Generate a random integer between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Return the choice corresponding to the random index
    return choices[randomIndex];
}

function getHumanChoice(){
    // take the input from the user
    let userInput = prompt("Please enter your choice (rock, paper, or scissors):");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const humanChoice = prompt("Choose rock, paper, or scissors:");

    if (!choices.includes(humanChoice)) {
        alert("Invalid choice, please choose rock, paper, or scissors.");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (choices[(choices.indexOf(humanChoice) + 1) % 3] === computerChoice) {
        humanScore++;
        console.log(`Congratulations! Your ${humanChoice} beat ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`Oh no! Your ${humanChoice} lost with ${computerChoice}.`);
    }

    checkGameEnd();
}

function checkGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            console.log("Game Over! You won the game!");
        } else {
            console.log("Game Over! Computer won the game!");
        }

        humanScore = 0;
        computerScore = 0;
        if (confirm("Do you want to play again?")) {
            playRound();
        }
    } else {
        playRound(); // Call playRound again to continue the game
    }
}

playRound(); // Start the game

