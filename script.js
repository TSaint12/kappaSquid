let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget() {
  return Math.floor(Math.random() * 9);
}

const compareGuesses(humanGuessInput, target, computerGuess) {
  if (Math.abs(humanGuessInpuy - target) <= Math.abs(computerGuess - target)) {
      return true;
} if (Math.abs(humanGuessInput - target) >= Math.abs(computerGuess - target)) {
      return false;
}
}

const updateScore(winner) {
  if (winner == 'human') {
    return humanScore ++;
  } if (winner == 'computer') {
    return computerScore ++;
  }
}

const advanceRound() {
  currentRoundNumnber ++;
}