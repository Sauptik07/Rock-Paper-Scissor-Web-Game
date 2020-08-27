var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".Scoreboard")
const result_div = document.querySelector(".Result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore = userScore + 1;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} beats ${convertToWord(computerChoice)}${(smallCompWord)}. You win! 🔥`;
  document.getElementById(userChoice).classList.add('greenGlow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('greenGlow')}, 300);
}

function lose(userChoice, computerChoice) {
  compScore = compScore + 1;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(computerChoice)}${(smallCompWord)} beats ${convertToWord(userChoice)}${(smallUserWord)}. You lose! 😛`;
  document.getElementById(userChoice).classList.add('redGlow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('redGlow')}, 300);


}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} equals ${convertToWord(computerChoice)}${(smallCompWord)}. It's a draw 🥴`;
  document.getElementById(userChoice).classList.add('grayGlow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('grayGlow')}, 300);


}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
  }
  switch (computerChoice + userChoice) {
    case "rs":
    case "sp":
    case "pr":
      lose(userChoice, computerChoice);
      break;
  }
  switch (userChoice + computerChoice){
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {

  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })

}

main();
