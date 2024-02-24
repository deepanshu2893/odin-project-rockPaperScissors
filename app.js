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


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a TIE";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You WIN!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You WIN!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You WIN!"
    } else {
        return "You LOSE!"
    }
}


let playerScore = 0;
let compScore = 0;
const totalGames = prompt("How many rounds do you want to play?");

function playGame() {
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You WIN!") {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}  `)
        console.log(`Player score = ${playerScore} Computer Score = ${compScore}`);
    }
    if (result === "You LOSE!") {
        compScore++;
        console.log(`You Lose! ${playerSelection} beats ${computerSelection}`)
        console.log(`Player score = ${playerScore} Computer Score = ${compScore}`);
    }
    else if (result === "It's a TIE") {
        console.log(`It's a Tie! ${playerSelection} cannot beat ${computerSelection}`)
        console.log(`Player score = ${playerScore} Computer Score = ${compScore}`);
    }
}

for (let i = 0; i < totalGames; i++) {
    playGame();
}
if (playerScore > compScore) {
    console.log("Player is the Winner!");
} else if (playerScore < compScore) {
    console.log("Computer is the Winner!");
} else {
    console.log("It's a TIE!");
}
