function computerPlay() {
	const randomNumber = Math.floor(Math.random() * 3);
	return randomNumber % 3 == 0 ? "Rock" : (randomNumber % 3 == 1 ? "Paper" : "Scissors");
}

console.log(computerPlay());