var clearScoresButton = document.querySelector("#clear");
var listEl = document.getElementById("highscores");
var scores = JSON.parse(localStorage.getItem("scores"));

function displayScores() {
  // var listEl = document.getElementById("highscores");
  // var scores = JSON.parse(localStorage.getItem("scores"));

  if (scores === null) {
    console.log("no scores");
  } else {
    for (var i = 0; i < scores.length; i++) {
      var scoresListItem = document.createElement("li");
      scoresListItem.textContent = scores[i].initials + " - " + scores[i].score;

      // listEl.appendChild(scoresListItem);

      // if (scores[i].score < scores[i - i].score) {
      //   listEl.append(scoresListItem);
      // } else {
      //   listEl.prepend(scoresListItem);
      // }

      if (
        scores[i].score < scores[i].score &&
        scores[i].score < scores[i - i].score
      ) {
        listEl.appendChild(scoresListItem);
      } else {
        listEl.prepend(scoresListItem);
      }
    }
  }

  // for (var i = 0; i < scores.length; i++) {
  //   var scoresListItem = document.createElement("li");
  //   scoresListItem.textContent = scores[i].initials + " - " + scores[i].score;

  // if (scores[i].score > scores[i - i].score) {
  //   // listEl.appendChild(scoresListItem);
  //   listEl.prepend(scoresListItem);
  // } else if (scores[i].score < scores[i - i].score) {
  //   listEl.appendChild(scoresListItem);
  // }

  // if (scores[i].score < scores[i - i].score) {
  //   listEl.append(scoresListItem);
  // } else {
  //   listEl.prepend(scoresListItem);
  // }

  // listEl.appendChild(scoresListItem);
  // }
  // }
}

displayScores();

function clearScores() {
  localStorage.clear();
}

clearScoresButton.addEventListener("click", function () {
  clearScores();
  listEl.classList.add("hide");
});
