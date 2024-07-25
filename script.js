var playagain = 'y';
var msg = null;
var user_guess_number;
var guess_counter = 0;
let guess_again = 0;
let randomNumber = 0;

while (playagain === 'y') {
  //Get user and Random Generator input and initalize game
  user_guess_number = prompt('Guess a Number between 1 and 10.');
  msg = "Guess a Number between 1 and 10.";
  console.log(msg);
  if (user_guess_number == null) {
    console.log("You've hit (Cancelled) on the game.  Exiting the game");
    break;
  } else if (user_guess_number <= 0 || user_guess_number >= 11) {
    console.log("You're out of range.  Exiting the game.")
    break;
  } else {
    user_guess_number = parseInt(user_guess_number);
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }
  //determine user and Random Generator guess are the same, if not user guess again
  while (user_guess_number != randomNumber) {
    if (user_guess_number == randomNumber) {
      break;

    } else if (user_guess_number > randomNumber) {
      user_guess_number = prompt("Your guess was too high, guess again.");
      guess_counter++;

    } else if (user_guess_number < randomNumber) {
      user_guess_number = prompt("Your guess was too low, guess again.");
      guess_counter++;
    }
  } //end of inner while loop
  //display counter and determine whether to play again
  guess_counter++;
  msg = "The computer guessed " + randomNumber + " and you guessed " + user_guess_number + ".\n";
  console.log(msg);
  msg = "You guessed it in " + guess_counter + " guesses!"
  console.log(msg);
  playagain = prompt("You guessed it in " + guess_counter++ + " guesses!  Do you want to play again? (y/n)");
  playagain = playagain.toLowerCase();
  if (playagain == null)
    console.log("Bye!");
  else if (playagain.toLowerCase() == "n")
    console.log("Bye!  See you next time!");
  else {
    console.log("Let's play again!");
    guess_counter = 0;
  }
}  //end of outer while loop
