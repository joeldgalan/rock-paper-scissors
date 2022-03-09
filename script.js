const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let p1Score = 0;
let pcScore = 0;
let container = document.getElementById("game-container");
let endScreen = document.getElementById("end-screen");
let winLoseStatement = document.getElementById("win-lose");
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let playerScore = document.getElementById('p1-score');
let computerScore = document.getElementById('pc-score');

/* 
computerPlay() generates a random number from 1 to 3, 
and then return either Rock, Paper, or Scissors. 
1 = Rock, 2 = Paper, 3 = Scissors.
*/
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else if (randomNum === 3) {
        return "Scissors";
    }
}

// playRound() takes in the player's throw and the computer's throw, and returns the result.
function playRound(playerSelection, computerSelection) {

    // conditions if player selects Rock.
    if (playerSelection === ROCK) {
        result1.textContent = "You threw Rock. Player 2 threw " + computerSelection;
        if (computerSelection === "Rock") {
            result2.textContent = "Tie! You both threw Rock.";
        } else if (computerSelection === "Paper") {
            result2.textContent = "You Lose! Paper beats Rock.";
            pcScore++;
            computerScore.textContent = pcScore;
        } else if (computerSelection === "Scissors") {
            result2.textContent = "You Win! Rock beats Scissors.";
            p1Score++;
            playerScore.textContent = p1Score;
        }
    }

    // conditions if player selects Paper.
    else if (playerSelection === PAPER) {
        result1.textContent = "You threw Paper. Player 2 threw " + computerSelection;
        if (computerSelection === "Rock") {
            result2.textContent = "You Win! Paper beats Rock.";
            p1Score++;
            playerScore.textContent = p1Score;
        } else if (computerSelection === "Paper") {
            result2.textContent = "Tie! You both threw Paper.";
        } else if (computerSelection === "Scissors") {
            result2.textContent = "You Lose! Scissors beats Paper.";
            pcScore++;
            computerScore.textContent = pcScore;
        }
    }

    // conditions if player selects Scissors.
    else if (playerSelection === SCISSORS) {
        result1.textContent = "You threw Scissors. Player 2 threw " + computerSelection;
        if (computerSelection === "Rock") {
            result2.textContent = "You Lose! Rock beats Scissors.";
            pcScore++;
            computerScore.textContent = pcScore;
        } else if (computerSelection === "Paper") {
            result2.textContent = "You Win! Scissors beats Paper.";
            p1Score++;
            playerScore.textContent = p1Score;
        } else if (computerSelection === "Scissors") {
            result2.textContent = "Tie! You both threw Scissors.";
        }
    }
}

function resetGame() {
    p1Score = 0;
    playerScore.textContent = p1Score;
    pcScore = 0;
    computerScore.textContent = pcScore;
    result1.textContent = "(Results)";
    result2.textContent = "";
    container.style.filter = "blur(0)";
    endScreen.style.left = "5000px";
    endScreen.style.opacity = "0";
}

// game() runs the game of Rock, Paper, Scissors for 5 rounds.
function game() {

    const playAgain = document.querySelector("#play-again");
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = computerPlay();

            playRound(playerSelection, computerSelection);

            if (p1Score >= 5 || pcScore >= 5) {
                // let container = document.getElementById("game-container");
                // let endScreen = document.getElementById("end-screen");
                // let winLoseStatement = document.getElementById("win-lose");

                container.style.filter = "blur(1.5rem)";
                endScreen.style.opacity = "1";
                endScreen.style.left = "auto";
                if (p1Score > pcScore) {
                    winLoseStatement.textContent = "You Won!"
                } else if (pcScore > p1Score) {
                    winLoseStatement.textContent = "You Lost!"
                }
            }
        });
    });
    playAgain.addEventListener('click', resetGame)
}

game();
