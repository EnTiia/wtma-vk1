import {StartGame, checkGuess, resetGame} from './modules/guess-game';

StartGame();

// TODO: Develop better algorithm

const testGamePlay = () => {
  let guessCounter = 0;
  let myGuess = 50;
  let gameOver = false;
  while(!gameOver) {
    let correctGuess = checkGuess(myGuess);
    guessCounter++;
    if (correctGuess === 0) {
      gameOver = true;
      resetGame();
    } else if (correctGuess < 0){
      myGuess++;
    } else {
      myGuess--;
    }
  }
  return guessCounter;
};

//testGamePlay();

let guessCounts = [];
for(let i=0; i<1000; i++) {
  guessCounts.push(testGamePlay());
}
console.log('guess counts', guessCounts);

let maxGuessCount = Math.max(...guessCounts);
console.log(maxGuessCount);

// TODO: Display max & average of guess counts
