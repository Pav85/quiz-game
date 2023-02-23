var clearScoresButton = document.querySelector("#clear");
var listEl = document.getElementById("highscores");
var scores = JSON.parse(localStorage.getItem("scores"));

function displayScores() {
  if (scores === null) {
    console.log("no scores");
  } else {
    for (var i = 0; i < scores.length; i++) {
      var scoresListItem = document.createElement("li");
      scoresListItem.textContent = scores[i].initials + " - " + scores[i].score;

      if (scores[i].score < scores[i - i].score) {
        listEl.append(scoresListItem);
      } else {
        listEl.prepend(scoresListItem);
      }
    }
  }
}

displayScores();

// function that clears all scores from local storage

function clearScores() {
  localStorage.clear();
}

// clear scores button event

clearScoresButton.addEventListener("click", function () {
  clearScores();
  listEl.classList.add("hide");
});
