let allGuesses = 0;

// The guessing game uses the binary search to find the random number.
const guessingGame = () => {
  const minLimit = 1, maxLimit = 100;
  const maxGuess = 20;
  let guessedNumber = null;
  let guesses = 0;
  let randomNumber = Math.floor(Math.random() * maxLimit) + minLimit;
  console.log('random number: ' + randomNumber);
  let middle = maxLimit / 2;
  let min = 1;
  let max = 100;
  let guessArray = [];

  while (guesses < maxGuess) {
    // The first guess is set to be the middle value.
    if (guessedNumber === null) {
      guessedNumber = middle;
    }
    guesses++;
    allGuesses++;
    // Saving guessed numbers to an array.
    guessArray.push(guessedNumber);

    if (guessedNumber === randomNumber) {
      console.log('Your guess was right: ' + guessedNumber);
      break;
    } else {
      // If the guessed number is too low, min value will be changed to the guessed value.
      // Middle value is changed by calculating the new middle value between max value and guessed number.
      // max + 1 (so we can guess the number 100).
      if (guessedNumber < randomNumber) {
        console.log('Too low: ' + guessedNumber);
        min = guessedNumber;
        middle = guessedNumber + ((max + 1 - guessedNumber) / 2);
        guessedNumber = Math.floor(middle);
        continue;
        // If the guessed number is too high, max value will be changed to the guessed value.
        // Middle value is changed by calculating the new middle value between guessed number and min value.
      } else if (guessedNumber > randomNumber) {
        console.log('Too high: ' + guessedNumber);
        max = guessedNumber;
        middle = guessedNumber - ((guessedNumber - min) / 2);
        guessedNumber = Math.floor(middle);
        continue;
      }
    }
  }
  // Displays the guessed numbers.
  document.querySelector('.guesses').textContent = ('Guessed numbers: ' + guessArray);
  document.querySelector('.results').textContent = ('Number of guesses: ' + guesses);

  return guesses;
};

let guessCounts = [];
for (let i = 0; i < 1000; i++) {
  guessCounts.push(guessingGame());
}
console.log('guess counts', guessCounts);

let maxGuessCount = Math.max(...guessCounts);
console.log('Max guess count: ' + maxGuessCount);
console.log('The theoretical maximum guesses with binary search from numbers between 1 and 100 is 7.');

let minGuessCount = Math.min(...guessCounts);
console.log('Min guess count: ' + minGuessCount);

let avgGuessCount = guessCounts.reduce((a, b) => a + b, 0) / guessCounts.length;
console.log('Average guess count: ' + avgGuessCount);
