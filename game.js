function getComputerChoice() {
    // Array containing the choices
    const choices = ["rock", "paper", "scissors"];
    
    // Generate a random integer between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Return the choice corresponding to the random index
    return choices[randomIndex];
}