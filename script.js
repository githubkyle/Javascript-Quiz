var timerEl = document.getElementById("timer");
var Q1Q2 = document.getElementById("q1q2");
var Q2Q3 = document.getElementById("q2q3");
var Q3Q4 = document.getElementById("q3q4");
var Q4Q5 = document.getElementById("q4q5");
var Q5Q6 = document.getElementById("q5q6");
var Q6Q7 = document.getElementById("q6q7");
var Q7Q8 = document.getElementById("q7q8");
var Q8Q9 = document.getElementById("q8q9");

var Q1 = document.getElementById("q1");
var Q2 = document.getElementById("q2");
var Q3 = document.getElementById("q3");
var Q4 = document.getElementById("q4");
var Q5 = document.getElementById("q5");
var Q6 = document.getElementById("q6");
var Q7 = document.getElementById("q7");
var Q8 = document.getElementById("q8");
var Q9 = document.getElementById("q9");
var R1 = document.getElementById("right1");
var R2 = document.getElementById("right2");
var R3 = document.getElementById("right3");
var R4 = document.getElementById("right4");
var R5 = document.getElementById("right5");
var R6 = document.getElementById("right6");
var R7 = document.getElementById("right7");
var R8 = document.getElementById("right8");
var R9 = document.getElementById("right9");
var W1 = document.getElementById("wrong1");
var W2 = document.getElementById("wrong2");
var W3 = document.getElementById("wrong3");
var W4 = document.getElementById("wrong4");
var W5 = document.getElementById("wrong5");
var W6 = document.getElementById("wrong6");
var W7 = document.getElementById("wrong7");
var W8 = document.getElementById("wrong8");
var W9 = document.getElementById("wrong9");
var W10 = document.getElementById("wrong10");
var W11 = document.getElementById("wrong11");
var W12 = document.getElementById("wrong12");
var W13 = document.getElementById("wrong13");
var W14 = document.getElementById("wrong14");
var W15 = document.getElementById("wrong15");
var W16 = document.getElementById("wrong16");
var W17 = document.getElementById("wrong17");
var W18 = document.getElementById("wrong18");
var W19 = document.getElementById("wrong19");
var W20 = document.getElementById("wrong20");
var W21 = document.getElementById("wrong21");
var W22 = document.getElementById("wrong22");
var W23 = document.getElementById("wrong23");
var W24 = document.getElementById("wrong24");
var W25 = document.getElementById("wrong25");
var Ender = document.getElementById("endGame");
var score = 0;
var StartButton = document.getElementById("StartTime");
var Respite = document.getElementById("result");
var FinalScore = document.getElementById("posted-score");

var SaveButton = document.getElementById("saver");

var ShowingScores = document.getElementById("all-scores");

var EndTimer = function() {
  timeLeft = 0;
  Q9.hidden = true;
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
});
W7.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W8.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W9.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W10.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W11.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W12.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W13.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W14.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
 
});
W15.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W16.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W17.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W18.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W19.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W20.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
 
});
W21.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W22.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  
});
W23.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  FinalScore.innerHTML = score;
});
W24.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  FinalScore.innerHTML = score;
});
W25.addEventListener("click", function() {
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
});
R4.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R5.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R6.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R7.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R8.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R9.addEventListener("click", function() {
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
function StartQ4() {
  Q3.hidden = true;
  Q4.hidden = false;
}
function StartQ5() {
  Q4.hidden = true;
  Q5.hidden = false;
}
function StartQ6() {
  Q5.hidden = true;
  Q6.hidden = false;
}
function StartQ7() {
  Q6.hidden = true;
  Q7.hidden = false;
}
function StartQ8() {
  Q7.hidden = true;
  Q8.hidden = false;
}
function StartQ9() {
  Q8.hidden = true;
  Q9.hidden = false;
}

function ShowScore() {
  Q1.hidden = true;
  Q2.hidden = true;
  Q3.hidden = true;
  Q4.hidden = true;
  Q5.hidden = true;
  Q6.hidden = true;
  Q7.hidden = true;
  Q8.hidden = true;
  Q9.hidden = true;
  endGame.hidden = false;
  FinalScore.innerHTML = score;
  if(score > 1){
    let BoastDiv = document.createElement("p");
    BoastDiv.innerHTML = "Congratulations! You've scored a highscore and will now be immortalized onto our list of champions";
    FinalScore.appendChild(BoastDiv);
  }
  
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
  
  
  HighScoresList.push(NewHighScore);
  var SortedScores = HighScoresList.sort((a, b) => a.score - b.score);
  var StringedScores = JSON.stringify(SortedScores);
  
  localStorage.setItem("highscores", StringedScores);
}
StartButton.addEventListener("click", countdown);

SaveButton.addEventListener("click", SaveHighScore);

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
      ShowScore();
    }
  }, 1000);
}
