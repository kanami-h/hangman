const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ["t", "d"];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      return (puzzle = puzzle + letter);
    } else {
      return (puzzle = puzzle + "*");
    }
  });

  return puzzle;
};

const game1 = new Hangman("dog", 2);
console.log(game1.getPuzzle());

const game2 = new Hangman("Toronto", 4);
console.log(game2.getPuzzle());
