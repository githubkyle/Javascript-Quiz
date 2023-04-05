var ScoresButton = document.getElementById("higher");
var PutEmHere = document.getElementById("all-scores");
var ClearList = document.getElementById("clearer");

var GottenScores = localStorage.getItem("highscores");
var ParsedScores = JSON.parse(GottenScores);

var Sorted = ParsedScores.sort();
var Reversed = Sorted.reverse();

for (i = 0; i < ParsedScores.length; i++) {
  var Score = ParsedScores[i].score;

  var Name = ParsedScores[i].name;

  var ScoreDiv = document.createElement("div");
ScoreDiv.classList.add("ScoreDiv");
  var PostingName = document.createElement("div");
  PostingName.textContent = `Name: ${Name}`;

  var PostingScore = document.createElement("div");

  PostingScore.textContent = Score;

  ScoreDiv.appendChild(PostingName)
  ScoreDiv.appendChild(PostingScore);
  PutEmHere.appendChild(ScoreDiv);
}

function ClearNames() {
  localStorage.setItem("highscores", "");
  PutEmHere.innerHTML = "";
}

ClearList.addEventListener("click", ClearNames);
