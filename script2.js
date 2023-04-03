var ScoresButton = document.getElementById("higher");
var PutEmHere = document.getElementById("all-scores");
var ClearList = document.getElementById("clearer");

var GottenScores = localStorage.getItem("highscores");
var ParsedScores = JSON.parse(GottenScores);

console.log(ParsedScores);

for (i = 0; i < ParsedScores.length; i++) {
  var Score = ParsedScores[i].score;

  var Name = ParsedScores[i].name;

  var PostingName = document.createElement("p");
  PostingName.textContent = Name;

  var PostingScore = document.createElement("p");

  PostingScore.textContent = Score;
  PutEmHere.appendChild(PostingName);
  PutEmHere.appendChild(PostingScore);
}

function ClearNames() {
  localStorage.setItem("highscores", "");
  PutEmHere.innerHTML = "";
}

ClearList.addEventListener("click", ClearNames);
