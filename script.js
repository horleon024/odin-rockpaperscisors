const container = document.querySelector(".game");
const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const roundResult = document.querySelector(".roundResult");
const finalResult = document.querySelector(".finalResult");
const restartButton = document.createElement("button");

restartButton.textContent = "Restart game";

function	computerPlay() {
	const randomNumber = Math.floor(Math.random() * 3);
	return randomNumber % 3 == 0 ? "Rock" : (randomNumber % 3 == 1 ? "Paper" : "Scissors");
}

function restartGame(event) {
	playerScore.textContent = 0;
	computerScore.textContent = 0;
	roundResult.textContent = "";
	finalResult.textContent = "";
	container.removeChild(restartButton);
	buttons.forEach(button => button.addEventListener('click', playRound));
}

function	checkForWinner(scoreAfterRound, isPlayerScore) {
	if (scoreAfterRound < 5) return;
	if (isPlayerScore) finalResult.textContent = "You won the game";
	else finalResult.textContent = "You lost the game";

	buttons.forEach(button => button.removeEventListener('click', playRound));
	container.appendChild(restartButton);
	restartButton.addEventListener('click', restartGame);	
}

function	playRound(event) {
	const playerSelection = event.target.textContent;
	const computerSelection = computerPlay();
	let isPlayerWin = true;
	let isDraw = false;
	if (playerSelection === "Rock") {
		if (computerSelection === "Scissors") {
			roundResult.textContent = "You win this round! Rock beats Scissors";
			isPlayerWin = true;
		} else if (computerSelection === "Paper") {
			roundResult.textContent = "You lose this round! Paper beats Rock";
			isPlayerWin = false;
		} else {
			roundResult.textContent = "This round is a draw";
			isDraw = true;
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			roundResult.textContent = "You lose this round! Rock beats Scissors";
			isPlayerWin = false;
		} else if (computerSelection === "Paper") {
			roundResult.textContent = "You win this round! Scissors beats Paper";
			isPlayerWin = true;
		} else {
			roundResult.textContent = "This round is a draw";
			isDraw = true;
		}
	} else {
		if (computerSelection === "Rock") {
			roundResult.textContent = "You win this round! Paper beats Rock";
			isPlayerWin = true;
		} else if (computerSelection === "Scissors") {
			roundResult.textContent = "You lose this round! Scissors beats Paper";
			isPlayerWin = false;
		} else {
			roundResult.textContent = "This round is a draw";
			isDraw = true;
		}
	}
	if (!isDraw && isPlayerWin) {
		let scoreAfterRound = parseInt(playerScore.textContent);
		scoreAfterRound++;
		playerScore.textContent = scoreAfterRound;
		checkForWinner(scoreAfterRound, true);
	}
	else if (!isDraw && !isPlayerWin) {
		let scoreAfterRound = parseInt(computerScore.textContent);
		scoreAfterRound++;
		computerScore.textContent = scoreAfterRound;
		checkForWinner(scoreAfterRound, false);
	}
}

buttons.forEach(button => button.addEventListener('click', playRound));