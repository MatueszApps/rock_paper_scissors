function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
let result = document.querySelector('.results');

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (['rock', 'paper', 'scissors'].indexOf(computerChoice) === (['rock', 'paper', 'scissors'].indexOf(humanChoice) + 1) % 3) {
        humanScore++;
        result.textContent = `Congratulations! Your ${humanChoice} beat ${computerChoice}. Score: ${humanScore}-${computerScore}`;
    } else {
        computerScore++;
        result.textContent = `Oh no! Your ${humanChoice} lost to ${computerChoice}. Score: ${humanScore}-${computerScore}`;
    }

    checkGameEnd();
}

function setupEventListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", () => playRound(button.textContent.toLowerCase()));
    });
}

function checkGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        result.textContent += ` Game Over! ${humanScore === 5 ? "You win!" : "Computer wins!"}`;
        setTimeout(() => {
            if (confirm("Do you want to play again?")) {
                resetGame();
            }
        }, 100); // Opóźnienie o 100 ms przed wyświetleniem alertu
    }
}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "New game started! Choose your move.";
}

setupEventListeners();