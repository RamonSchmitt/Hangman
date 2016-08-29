function wrongGuessCount(word, guesses) {
  return guesses.filter(count => word.indexOf(count) == -1).length
}

console.log("test wrong guesses: ", wrongGuessCount("hello", ["e", "d", "x", "o"]) === 2)

function showGuess(word, guesses) {
  var lalala = word.split("");
  var lalala2 = lalala.map(letter => guesses.indexOf(letter) == -1 ? "_" : letter)
  return lalala2.join(" ")
}

console.log("test show guess: ", showGuess("hello", ["e"]) === "_ e _ _ _")

function isWinner(word, guesses) {
  var lalala = word.split("");
  var winner = lalala.filter(letter => guesses.indexOf(letter) >= 0 ? false : true)
  return winner.length == 0
}

console.log("test winner 1:", !isWinner("hello", ["e", "x"]))
console.log("test winner 2:", isWinner("hello", ["o", "l", "e", "h"]))

// to read from the console
const readline = require("readline")
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    if (wrongGuessCount(word, guesses) >= 6) {
      return console.log("you've lost");
    // check if won
    } else if (isWinner(word, guesses) == true) {
      return console.log("you've won");
    // ask for the next letter
    } else {
      console.log(showGuess(word, guesses))
      rl.question("next letter? ", answer => {
        console.log("player wrote:", answer)
        // do something with answer
        guesses.concat([answer]);
        next(word, guesses.concat([answer]))
      })
    }
  }

next("jazz", [])
