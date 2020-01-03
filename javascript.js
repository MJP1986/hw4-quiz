var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var home = document.getElementById("home");
var timer = document.getElementById("timer")
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var result = document.getElementById("comment");
var buttons = document.querySelector("#choices");
var score = 0;
var questionCounter = 0;

document.getElementById("start").onclick = function() { 
  document.getElementById("home").style.display = "none";
  buttons.style.display = "block";
  renderQuestion();


};

function renderQuestion() {
    question.innerHTML = ""
    choiceA.textContent = questions[questionCounter].choices[0];
    choiceB.textContent = questions[questionCounter].choices[1];
    choiceC.textContent = questions[questionCounter].choices[2];
    choiceD.textContent = questions[questionCounter].choices[3];
    var pl = document.createElement("p");
    pl.innerText = questions[questionCounter].title;
    question.appendChild(pl);
    questionCounter++
  
    if (questions.length === questionCounter) {
      choices.style.display = "none";
  console.log("test")
    }
};

buttons.addEventListener("click", function() {  
  renderQuestion();
});

