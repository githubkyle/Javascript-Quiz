var timerEl = document.getElementById("timer");
var Q1Q2 = document.getElementById("q1q2");
var Q2Q3 = document.getElementById("q2q3");
var Q1 = document.getElementById("q1");
var Q2 = document.getElementById("q2");
var Q3 = document.getElementById("q3");
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
var Ender = document.getElementById("endGame");
var score = 0;
var StartButton = document.getElementById("StartTime");
var Respite = document.getElementById("result");
var FinalScore = document.getElementById("posted-score");

var SaveButton = document.getElementById("saver");

var ShowingScores = document.getElementById("all-scores");

var EndTimer = function() {
  timeLeft = 0;
};
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
  FinalScore.innerHTML = score;
});
W7.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  FinalScore.innerHTML = score;
});
W8.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  FinalScore.innerHTML = score;
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
  FinalScore.innerHTML = score;
});

function StartQ1() {
  StartButton.hidden = true;
  Q1.hidden = false;
}

function StartQ2() {
  Q1.hidden = true;
  Q2.hidden = false;
}

function StartQ3() {
  Q2.hidden = true;
  Q3.hidden = false;
}

function ShowScore() {
  endGame.hidden = false;
}

// const form = document.querySelector("form");
// var FinalScore = document.getElementById("posted-score");
// var PlayerName = document.getElementById("form1").textContent;

function SaveHighScore() {
  var HighScoresList = [];
  if (localStorage.getItem("highscores")) {
    HighScoresList = JSON.parse(localStorage.getItem("highscores"));
  }
  var NewHighScore = {};
  // if get item high scores defined, then s
  var PlayerName = document.getElementById("form1").value;
  NewHighScore.name = PlayerName;
  NewHighScore.score = score;
  console.log(document.getElementById("form1"));
  console.log(NewHighScore);
  HighScoresList.push(NewHighScore);
  var SortedScores = HighScoresList.sort((a, b) => a.score - b.score);
  var StringedScores = JSON.stringify(SortedScores);
  console.log(StringedScores);
  localStorage.setItem("highscores", StringedScores);
}
StartButton.addEventListener("click", countdown);

SaveButton.addEventListener("click", SaveHighScore);
