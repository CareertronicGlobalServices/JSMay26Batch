let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
//result k para graphs
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

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
  if (numGuess === 11) {
    displayGuess(guess);
    displaymsg(`Game Over .The Random Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
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
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = "<h2 id=newgame>Start a new game</h2>";
  startOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newGameButton = document.querySelector("#newgame");
  newGameButton.addEventListener("click", function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = "";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playgame = true;
  });
}
