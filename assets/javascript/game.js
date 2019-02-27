

//user & computer input options...
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//wins & losses so far...
var wins = 0;
var losses = 0;
// guesses so far-constantly updating number
var numguesses = 9;
// will show users choices in text
var guessChoices = [];

  //start to game/function to output user input to game/
document.onkeyup = function(event) {
  var userguess = event.key;
  //using the math random equation to randomize computer choices from the options given
  var computerGuess = options[Math.floor(Math.random()*options.length)];
//index of options/list of letters for user choice
if (options.indexOf(userguess)!==-1){
  if (userguess === computerGuess) {
        wins++;
        numguesses = 9;
        guessChoices = [];
  }
  if (userguess != computerGuess) {
        numguesses --;
    }
  if (numguesses === 0) {
    numguesses = 9;
    losses ++;
    guessChoices = [];
  }
   //pushes users guesses to the display, so they know what they have chosen so far, until round ends./ 
  guessChoices.push(event.key)
  }
    //puts text to screen & updates with input from user.
  var html = 
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numguesses + "</p>" +
			"<p>Your chose: " + guessChoices + (", ") + "</p>";
      //retrieves info from html file/page...
			document.querySelector("#game").innerHTML = html;
  }
