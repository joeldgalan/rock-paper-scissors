const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let gameEnd = false;
let p1Score = 0;
let pcScore = 0;
const container = document.getElementById("game-container");
const endScreen = document.getElementById("end-screen");
const winLoseStatement = document.getElementById("win-lose");
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const playerScore = document.getElementById('p1-score');
const computerScore = document.getElementById('pc-score');
const comRock = document.querySelector("#com-rock");
const comPaper = document.querySelector("#com-paper");
const comScissors = document.querySelector("#com-scissors");

// sound effects
const winGameAudio = document.querySelector("#win-game-sound");
const loseGameAudio = document.querySelector("#lose-game-sound");
const winRoundAudio = document.querySelector("#win-sound");
const loseRoundAudio = document.querySelector("#lose-sound");
const tieAudio = document.querySelector("#tie-sound");
const rockAudio = document.querySelector("#rock-sound");
const paperAudio = document.querySelector("#paper-sound");
const scissorsAudio = document.querySelector("#scissors-sound");



/* computerPlay() generates a random number from 1 to 3, 
and then return either Rock, Paper, or Scissors. 
1 = Rock, 2 = Paper, 3 = Scissors. */
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


// playRound() takes in the player's throw and the computer's throw, 
// as well as the button clicked(for effects), and displays the result.
function playRound(btnClicked, playerSelection, computerSelection) {

    // conditions if player selects Rock.
    if (playerSelection === ROCK) {
        result1.textContent = "You threw Rock.";
        result2.textContent = "Player 2 threw " + computerSelection + ".";
        // sound effect
        rockAudio.currentTime = 0;
        rockAudio.play();
        // creates button press effect for selected button
        btnClicked.classList.add("thrown");
        
        // figures out the result and displays according result.
        if (computerSelection === "Rock") {
            result3.textContent = "Tie! You both threw Rock.";
            // sound effect
            tieAudio.currentTime = 0;
            tieAudio.play();
            // creates button press effect for pc
            comRock.classList.add("thrown");
        } else if (computerSelection === "Paper") {
            result3.textContent = "You Lose! Paper beats Rock.";
            // sound effect
            loseRoundAudio.currentTime = 0;
            loseRoundAudio.play();
            // creates button press effect for pc
            comPaper.classList.add("thrown");
            pcScore++;
            computerScore.textContent = pcScore;
        } else if (computerSelection === "Scissors") {
            result3.textContent = "You Win! Rock beats Scissors.";
            // sound effect
            winRoundAudio.currentTime = 0;
            winRoundAudio.play();
            // creates button press effect for pc
            comScissors.classList.add("thrown");
            p1Score++;
            playerScore.textContent = p1Score;
        }
    }

    // conditions if player selects Paper.
    else if (playerSelection === PAPER) {
        result1.textContent = "You threw Paper.";
        result2.textContent = "Player 2 threw " + computerSelection + ".";
        // sound effect
        paperAudio.currentTime = 0;
        paperAudio.play();
        // creates button press effect for selected button
        btnClicked.classList.add("thrown");

        if (computerSelection === "Rock") {
            result3.textContent = "You Win! Paper beats Rock.";
            winRoundAudio.currentTime = 0;
            winRoundAudio.play();
            comRock.classList.add("thrown");
            p1Score++;
            playerScore.textContent = p1Score;
        } else if (computerSelection === "Paper") {
            result3.textContent = "Tie! You both threw Paper.";
            tieAudio.currentTime = 0;
            tieAudio.play();
            comPaper.classList.add("thrown");
        } else if (computerSelection === "Scissors") {
            result3.textContent = "You Lose! Scissors beats Paper.";
            loseRoundAudio.currentTime = 0;
            loseRoundAudio.play();
            comScissors.classList.add("thrown");
            pcScore++;
            computerScore.textContent = pcScore;
        }
    }

    // conditions if player selects Scissors.
    else if (playerSelection === SCISSORS) {
        result1.textContent = "You threw Scissors.";
        result2.textContent = "Player 2 threw " + computerSelection + ".";
        // sound effect
        scissorsAudio.currentTime = 0;
        scissorsAudio.play();
        // creates button press effect for selected button
        btnClicked.classList.add("thrown");

        if (computerSelection === "Rock") {
            result3.textContent = "You Lose! Rock beats Scissors.";
            loseRoundAudio.currentTime = 0;
            loseRoundAudio.play();
            comRock.classList.add("thrown");
            pcScore++;
            computerScore.textContent = pcScore;
        } else if (computerSelection === "Paper") {
            result3.textContent = "You Win! Scissors beats Paper.";
            winRoundAudio.currentTime = 0;
            winRoundAudio.play();
            comPaper.classList.add("thrown");
            p1Score++;
            playerScore.textContent = p1Score;
        } else if (computerSelection === "Scissors") {
            result3.textContent = "Tie! You both threw Scissors.";
            tieAudio.currentTime = 0;
            tieAudio.play();
            comScissors.classList.add("thrown");
        }
    }
}


// resetGame() resets the scores to 0 and starts game again if player hits "Play Again"
function resetGame() {
    if (gameEnd === true) {
        p1Score = 0;
        playerScore.textContent = p1Score;
        pcScore = 0;
        computerScore.textContent = pcScore;
        result1.textContent = "";
        result2.textContent = "(Results)";
        result3.textContent = "";
        container.style.filter = "blur(0)";
        endScreen.style.opacity = "0";
        gameEnd = false;
    }
}


// Removes "thrown" class, completing button animation
function removeTransition() {
    const thrownBtns = document.querySelectorAll(".thrown");
    thrownBtns.forEach((btn) => {
        btn.classList.remove('thrown');
    });
}


// game() runs the game of Rock, Paper, Scissors for 5 rounds.
function game() {

    const playAgain = document.querySelector("#play-again");
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

        // Event listeners for rock paper scissors buttons.
        button.addEventListener('click', () => {

            if (gameEnd === false) {
                playerSelection = button.id;
                computerSelection = computerPlay();

                playRound(button, playerSelection, computerSelection);

                // detects when a player hits 5 points. Shows end screen.
                if (p1Score >= 5 || pcScore >= 5) {
                    gameEnd = true;

                    container.style.filter = "blur(1.5rem)";
                    endScreen.style.opacity = "1";
                    endScreen.style.right = "auto";
                    endScreen.style.top = "auto";
                    if (p1Score > pcScore) {
                        winLoseStatement.textContent = "You Won!"
                        // sound effect
                        winGameAudio.play();
                    } else if (pcScore > p1Score) {
                        winLoseStatement.textContent = "You Lost!"
                        // sound effect
                        loseGameAudio.play();
                    }
                }
            }
        });
        // event listener to remove button effects
        button.addEventListener('transitionend', removeTransition);
    });
    // event listener for "Play Again" button
    playAgain.addEventListener('click', resetGame)
}

game();
