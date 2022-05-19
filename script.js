function	computerPlay() {
	const randomNumber = Math.floor(Math.random() * 3);
	return randomNumber % 3 == 0 ? "Rock" : (randomNumber % 3 == 1 ? "Paper" : "Scissors");
}

function	playRound(event) {
	const playerSelection = event.target.textContent;
	const computerSelection = computerPlay();
	if (playerSelection === "Rock") {
		if (computerSelection === "Scissors") {
			console.log("You win this round! Rock beats Scissors");
			return 1;
		} else if (computerSelection === "Paper") {
			console.log("You lose this round! Paper beats Rock");
			return 2;
		} else {
			console.log("This round is a draw");
			return 0;
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			console.log("You lose this round! Rock beats Scissors");
			return 2;
		} else if (computerSelection === "Paper") {
			console.log("You win this round! Scissors beats Paper");
			return 1;
		} else {
			console.log("This round is a draw");
			return 0;
		}
	} else {
		if (computerSelection === "Rock") {
			console.log("You win this round! Paper beats Rock");
			return 1;
		} else if (computerSelection === "Scissors") {
			console.log("You lose this round! Scissors beats Paper");
			return 2;
		} else {
			console.log("This round is a draw");
			return 0;
		}
	}
}

/*function	game() {
	let	playerScore = 0;
	let	computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const result = playRound(prompt("Your choice: "), computerPlay());
		result == 1 ? playerScore++ : (result == 2 ? computerScore++ : 0);
	}
	console.log(playerScore > computerScore ? "You won the game" : (playerScore == computerScore ? "It's a draw" : "You lost the game"));
}*/

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', playRound));

//game();