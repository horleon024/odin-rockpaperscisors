function computerPlay() {
	const randomNumber = Math.floor(Math.random() * 3);
	return randomNumber % 3 == 0 ? "Rock" : (randomNumber % 3 == 1 ? "Paper" : "Scissors");
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "rock") {
		if (computerSelection === "Scissors") {
			return "You win! Rock beats Scissors";
		} else if (computerSelection === "Paper") {
			return "You lose! Paper beats Rock";
		} else {
			return "It's a draw";
		}
	} else if (playerSelection.toLowerCase() === "scissors") {
		if (computerSelection === "Rock") {
			return "You lose! Rock beats Scissors";
		} else if (computerSelection === "Paper") {
			return "You win! Scissors beats Paper";
		} else {
			return "It's a draw";
		}
	} else {
		if (computerSelection === "Rock") {
			return "You win! Paper beats Rock";
		} else if (computerSelection === "Scissors") {
			return "You lose! Scissors beats Paper";
		} else {
			return "It's a draw";
		}
	}
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerPlay()));