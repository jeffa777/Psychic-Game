

//user & computer input options...
var options = ["r", "p", "s"];
//what will this^^^^ be for all letters? 


document.onkeyup = function() {
  var userguess = String.fromCharCode(event.keyCode).
      toLowerCase();

    console.log(userguess);

  var computerGuess = options[Math.floor(Math.random()*options.length)];

  console.log(computerGuess);
}

