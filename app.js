function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);


    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

let playerScore = 0;
let compScore = 0;


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a TIE";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"))
    {
        playerScore++;
        return "You WIN!"
    }
    else {
        compScore++; 
        return "You LOSE!"
    }
}



function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (playerScore === 5 || compScore === 5){
        announceWinner(); 
    }
    if (result === "You WIN!") {
        
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}
        Player score = ${playerScore} Computer Score = ${compScore}`;
        
    }
    if (result === "You LOSE!") {
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}
        Player score = ${playerScore} Computer Score = ${compScore}`;
        
    }
    else if (result === "It's a TIE") {
        resultsDiv.textContent = `It's a Tie! ${playerSelection} cannot beat ${computerSelection}
       Player score = ${playerScore} Computer Score = ${compScore}`;
    }
    
}
function announceWinner() {
    if (playerScore > compScore) {
        resultsDiv.textContent = "Player is the Winner!"
    }
    else{
        resultsDiv.textContent = "Compputer is the Winner!"
    }
}

rockBtn.addEventListener("click", function(){
    playGame("rock")
    
})
paperBtn.addEventListener("click", function(){
    playGame("paper")
})
scissorsBtn.addEventListener("click", function(){
    playGame("scissors")
})



