var clearScoresButton = document.querySelector("#clear");
var listEl = document.getElementById("highscores");

function displayScores() {
  //   var listEl = document.getElementById("highscores");
  var scores = JSON.parse(localStorage.getItem("scores"));

  for (var i = 0; i < scores.length; i++) {
    var scoresListItem = document.createElement("li");
    scoresListItem.textContent = scores[i].initials + " - " + scores[i].score;

    listEl.appendChild(scoresListItem);
  }
}

displayScores();

function clearScores() {
  localStorage.clear();
}

clearScoresButton.addEventListener("click", function () {
  clearScores();
  listEl.classList.add("hide");
});
