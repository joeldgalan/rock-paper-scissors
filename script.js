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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
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

    else if (playerSelection === "PAPER") {
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

    else if (playerSelection === "SCISSORS") {
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

    else {
        return "You did not throw.";
    }
}

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