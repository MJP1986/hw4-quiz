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
var userForm = document.getElementById("enterName")
var userName = document.getElementById("userName");
var scoreList = document.getElementById("scoreList")
var nameList = document.getElementById("nameList")
var buttons = document.querySelector("#choices");
var button = document.querySelectorAll(".choice");

var score = 0;
var questionCounter = 0;
time = 40;
var timerInterval;

document.getElementById("start").onclick = function () {
  document.getElementById("home").style.display = "none";
  buttons.style.display = "block";
  renderQuestion();
  timeStart();

};

function timeStart() {
  timerInterval = setInterval(function(){
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
  choiceA.setAttribute('data-index', 1);

  choiceB.textContent = questions[questionCounter].choices[1];
  choiceB.setAttribute('data-index', 2);

  choiceC.textContent = questions[questionCounter].choices[2];
  choiceC.setAttribute('data-index', 3);

  choiceD.textContent = questions[questionCounter].choices[3];
  choiceD.setAttribute('data-index', 4);

  var pl = document.createElement("p");
  pl.innerText = questions[questionCounter].title;
  question.appendChild(pl);
  questionCounter++
  // console.log(questionCounter)
};

function gameOver() {
  highScoreEl.innerText = "Your Score is: " + time;
  result.innerHTML = "";
  buttons.style.display = "none";
  question.style.display = "none";
  userForm.style.display = "block";
  clearInterval(timerInterval)
}

scoreNames();

function scoreNames() {
  nameList.innerHTML = "";

}
function checkAnswers(i, answerInx) {
  if (questions[i] === answerInx) {
    result.innerHTML = "correct"
  }
  else {
    result.innerHTML = "wrong"
  }
}

buttons.addEventListener("click", function () {
  renderQuestion();
});


for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    console.log(event.target.getAttribute('data-index'))
    var answerInx = event.target.getAttribute('data-index');
    checkAnswers(i, answerInx);
  });
}
