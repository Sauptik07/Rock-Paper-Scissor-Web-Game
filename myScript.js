const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".Scoreboard")
const result_div = document.querySelector(".Result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


rock_div.addEventListener('click', function(){
  console.log(u clicked rock);
})
