var Switcher = document.getElementsByClassName("Question");
var timerEl = document.getElementById("timer");
var StartButton = document.getElementById("Starter");
var rightButtons = document.getElementsByClassName("right");
var wrongButtons = document.getElementsByClassName("wrong");
var Result = document.getElementsByClassName("result");
var DisplayHighScore = document.getElementById("highscores");

var mostRecentScore = localStorage.getItem("posted-score");
var AllHighScores = JSON.parse(localStorage.getItem("highscores")) || [];

saveHighScore = e => {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: Name.value
  };
  AllHighScores.push(score);
  console.log(AllHighScores);
};

var PostScore = document.getElementById("posted-score");
var score = 0;
var Name = document.getElementById("form1").value;

StartButton.addEventListener("click", function() {
  Switcher.style.visible = true;
});

StartButton.addEventListener("click", countdown());

function countdown() {
  var timeLeft = 55;

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

    if (wrongButtons) {
      timeLeft - 5;
      Result.textContent = "Wrong!";
      preventDefault();
    } else if (rightButtons) {
      Result.textContent = "Correct!";
      score++;
      preventDefault();
    }

    PostScore = score;
  }, 1000);
}
