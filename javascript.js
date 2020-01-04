var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var home = document.getElementById("home");
var timerEl = document.getElementById("timer")
var question = document.getElementById("question");
var highScoreEl = document.getElementById("highScore")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var result = document.getElementById("comment");
var nameEl = document.getElementById("enterName")
var buttons = document.querySelector("#choices");
var score = 0;
var questionCounter = 0;
time = 60;

document.getElementById("start").onclick = function () {
  document.getElementById("home").style.display = "none";
  buttons.style.display = "block";
  renderQuestion();
  timeStart();

};

function timeStart() {
  var timerInterval = setInterval(function(){
    timerEl.textContent = "Time Remaining: " + time

    if (time === 0) {
      clearInterval(timerInterval)
      gameOver()
    }
    else {
      time--;
    }
  }, 1000);
};

function renderQuestion() {

  if (questionCounter >= questions.length) {
    question.innerHTML = ""
    buttons.style.display = "none";
    gameOver();
    return
  }
  question.innerHTML = ""
  choiceA.textContent = questions[questionCounter].choices[0];
  choiceB.textContent = questions[questionCounter].choices[1];
  choiceC.textContent = questions[questionCounter].choices[2];
  choiceD.textContent = questions[questionCounter].choices[3];

  var pl = document.createElement("p");
  pl.innerText = questions[questionCounter].title;
  question.appendChild(pl);
  questionCounter++
  console.log(questionCounter)


};

function gameOver() {

  result.innerHTML = "";
  nameEl.style.display = "block";
  highScoreEl.innerText = "Your Score is: " + time;



}

// function checkAnswers() {
//   if (Element.ma === ) {
//     result.innerHTML = "correct"
//   }
//   else {
//     result.innerHTML = "wrong"
//   }
// }

buttons.addEventListener("click", function () {
  renderQuestion();
});
