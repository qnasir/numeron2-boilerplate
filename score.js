// Iteration 8: Making scoreboard functional
var play_again=document.getElementById("play-again-button")
play_again.onclick=()=>{
  window.open("./game.html","_self");
}
var score_board=document.getElementById("score-board")
let value=localStorage.getItem("score")
score_board.textContent=value;