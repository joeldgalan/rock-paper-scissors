const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";


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
        console.log("You threw Rock.");
        console.log("Player 2 threw " + computerSelection);
        if (computerSelection === "Rock") {
            return "Tie! You both threw Rock.";
        } else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors.";
        }
    }

    // conditions if player selects Paper.
    else if (playerSelection === PAPER) {
        console.log("You threw Paper.");
        console.log("Player 2 threw " + computerSelection);
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock.";
        } else if (computerSelection === "Paper") {
            return "Tie! You both threw Paper.";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }
    }

    // conditions if player selects Scissors.
    else if (playerSelection === SCISSORS) {
        console.log("You threw Scissors.");
        console.log("Player 2 threw " + computerSelection);
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper.";
        } else if (computerSelection === "Scissors") {
            return "Tie! You both threw Scissors.";
        }
    }

    // if player does not throw Rock, Paper, or Scissors, returns as not thrown.
    else {
        return "You did not throw.";
    }
}

// game() runs the game of Rock, Paper, Scissors for 5 rounds.
function game() {
    let playerThrow;
    let count = 0;
    while (count < 5) {
        playerThrow = prompt("What will you throw?");
        playerThrow = playerThrow.toUpperCase();
        computerThrow = computerPlay();

        console.log(playRound(playerThrow, computerThrow));
        console.log("\n");
        count ++;
    }
}

console.log(game());