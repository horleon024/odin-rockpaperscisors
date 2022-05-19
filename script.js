function	computerPlay() {
	const randomNumber = Math.floor(Math.random() * 3);
	return randomNumber % 3 == 0 ? "Rock" : (randomNumber % 3 == 1 ? "Paper" : "Scissors");
}

function	playRound(event) {
	const playerSelection = event.target.textContent;
	const computerSelection = computerPlay();
	const roundDiv = document.querySelector(".currentRound");
	const playerScore = document.querySelector(".playerScore");
	const computerScore = document.querySelector(".computerScore");
	let isPlayerWin = true;
	let isDraw = false;
	if (playerSelection === "Rock") {
		if (computerSelection === "Scissors") {
			roundDiv.textContent = "You win this round! Rock beats Scissors";
			isPlayerWin = true;
		} else if (computerSelection === "Paper") {
			roundDiv.textContent = "You lose this round! Paper beats Rock";
			isPlayerWin = false;
		} else {
			roundDiv.textContent = "This round is a draw";
			isDraw = true;
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			roundDiv.textContent = "You lose this round! Rock beats Scissors";
			isPlayerWin = false;
		} else if (computerSelection === "Paper") {
			roundDiv.textContent = "You win this round! Scissors beats Paper";
			isPlayerWin = true;
		} else {
			roundDiv.textContent = "This round is a draw";
			isDraw = true;
		}
	} else {
		if (computerSelection === "Rock") {
			roundDiv.textContent = "You win this round! Paper beats Rock";
			isPlayerWin = true;
		} else if (computerSelection === "Scissors") {
			roundDiv.textContent = "You lose this round! Scissors beats Paper";
			isPlayerWin = false;
		} else {
			roundDiv.textContent = "This round is a draw";
			isDraw = true;
		}
	}
	if (!isDraw && isPlayerWin) {
		let scoreAfterRound = parseInt(playerScore.textContent);
		scoreAfterRound++;
		playerScore.textContent = scoreAfterRound;
	}
	else if (!isDraw && !isPlayerWin) {
		let scoreAfterRound = parseInt(computerScore.textContent);
		scoreAfterRound++;
		computerScore.textContent = scoreAfterRound;
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