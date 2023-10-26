// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1;
var num2;
num1=Math.round(Math.random()*100);
num2=Math.round(Math.random()*100);
let num1_box=document.getElementById("number1");
let num2_box=document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional
var score=0;
var operator
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var mul=document.getElementById("mul");
var divide=document.getElementById("divide");
var modulus=document.getElementById("modulus");
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3;
let num3_box=document.getElementById("number3");
// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
  num1=Math.round(Math.random()*100);
  num2=Math.round(Math.random()*100);
  if(num1<num2){
    let temp=num1;
    num1=num2;
    num2=temp;
  }
  operator=Math.ceil(Math.random()*5);
  switch(operator){
    case 1: 
    num3=num1+num2;
    break;
    case 2: 
    num3=num1-num2;
    break;
    case 3: 
    num3=num1*num2;
    break;
    case 4: 
    num3=Math.floor(num1/num2);
    break;
    case 5: 
    num3=num1%num2;
    break;
    default:
      randomise();
  }
  
  num1_box.textContent=num1;
  num2_box.textContent=num2;
  num3_box.textContent=num3;
  }
  randomise()
  function input(){
    score++
    localStorage.setItem("score", score);
    randomise()
    startTimer()
  }
// Iteration 6: Making the Operators (button) functional

// Plus Operator
plus.onclick=()=>{
  if(num1+num2===num3){
    input()
  }
  else{
    window.open("./gameover.html","_self");
  }
}
// Minus Operator
minus.onclick=()=>{
  if(num1-num2===num3){
    input()
  }
  else{
    window.open("./gameover.html","_self");
  }
}

// Multiplication Operator
mul.onclick=()=>{
  if(num1*num2===num3){
    input()
  }
  else{
    window.open("./gameover.html","_self");
  }
}

// Divide Operator

divide.onclick=()=>{
  if(Math.floor(num1/num2) === num3){
    input()
  }
  else{
    window.open("./gameover.html","_self");
  }
}

// Modulus Operator

modulus.onclick=()=>{
  if(num1%num2===num3){
    input()
  }
  else{
    window.open("./gameover.html","_self");
  }
}
// Iteration 7: Making Timer functional
let time = 20;
let time_box = document.getElementById("timer");
let interval;
function startTimer() {
  time = 20;
  interval = setInterval(() => {
    if (time == 0) {
      // clearInterval(interval);
      window.open("./gameover.html", "_self");
    }
    time_box.innerHTML = time;
    time--;
  },1000);
}
startTimer();
localStorage.setItem("score",score);