var ScoresButton = document.getElementById("higher");
var PutEmHere = document.getElementById("all-scores");
var ClearList = document.getElementById("clearer");

var GottenScores = localStorage.getItem("highscores");
var ParsedScores = JSON.parse(GottenScores);

console.log(ParsedScores);

// ParsedScores.forEach(e => {
//   console.log(`${e.score}`);
// });

for (i = 0; i < ParsedScores.length; i++) {
  var Score = ParsedScores[i].score;
  console.log(Score);
  var Name = ParsedScores[i].name;
  
  var PostingScore = document.createElement("p");
  PostingScore.textContent = Score;
  PutEmHere.appendChild(PostingScore);
}

function ClearNames() {
  ParsedScores.value = [];
}

ClearList.addEventListener("click", ClearNames);
// ScoresButton.addEventListener("click", DisplayingHighs);
