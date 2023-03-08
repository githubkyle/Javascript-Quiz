var Switcher = document.getElementsByClassName("Question");
var timerEl = document.getElementById("timer");
var StartButton = document.getElementById("Starter");
var R1 = document.getElementById("right1");
var R2 = document.getElementById("right2");
var R3 = document.getElementById("right3");
var W1 = document.getElementById("wrong1");
var W2 = document.getElementById("wrong2");
var W3 = document.getElementById("wrong3");
var W4 = document.getElementById("wrong4");
var W5 = document.getElementById("wrong5");
var W6 = document.getElementById("wrong6");
var W7 = document.getElementById("wrong7");
var W8 = document.getElementById("wrong8");
var Respite = document.getElementById("result");
var DisplayHighScore = document.getElementById("highscores");
const mostlyRecentScore = localStorage.getItem("mostRecentScore");

var mostRecentScore = localStorage.getItem("posted-score");
var AllHighScores = JSON.parse(localStorage.getItem("highscores")) || [];

//connects the resulting score to display it to a page
var PostScore = document.getElementById("posted-score");
var score = 0;
var Name = document.getElementById("form1").value;

var timeLeft = 55;
function countdown() {
  console.log("high");

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "The game has ended";

      clearInterval(timeInterval);
    }
  }, 1000);
}
var EndTimer = function() {
  timeLeft = 0;
};
W1.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W2.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W3.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W4.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W5.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W6.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
W7.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
W8.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
R1.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R2.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R3.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
  EndTimer();
});
StartButton.addEventListener("click", countdown);

saveHighScore = e => {
  console.log("clicked the save button");
  e.preventDefault();

  var UserHighscore = {
    name: Name.value,
    score: mostlyRecentScore
  };
  console.log(UserHighscore);
};

localStorage.setItem("highscores", JSON.stringify(score));
