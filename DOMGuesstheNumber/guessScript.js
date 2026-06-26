let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
//result k para graphs
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let playgame = true;
let numGuess = 1;

if (playgame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(userInput.value)
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess > 100) {
    alert(`Please enter a valid number between 1 and 100`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 1 but less than 100`);
  } else prevGuess.push(guess);
  //console.log(prevGuess);
  checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displaymsg(`YOU are right`);
  } else if (guess > randomNumber) {
    displaymsg(`Guessed no. is high`);
  } else if (guess < randomNumber) {
    displaymsg(`guessed no. is low`);
  }
}

function displaymsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
