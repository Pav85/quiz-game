// variables that need to be set
var questionIndex = 0;

var countdownTimer = document.querySelector("#time"); // timer
var secondsLeft = 60; // set the timer to the seconds left
var timerInterval;

var timerEl = document.querySelector("#timer"); // timer
var startButtonEl = document.querySelector("#start"); // start button
var submitButtonEl = document.querySelector("#submit"); // submit button
var startScreenEl = document.querySelector("#start-screen"); // start screen
var questionsEl = document.querySelector("#questions"); // questions
var choicesEl = document.querySelector("#choices"); // choices
var questionTitlesEl = document.querySelector("#question-title"); // question title
var endScreenEl = document.querySelector("#end-screen"); // end screen
var finalScoreEl = document.querySelector("#final-score"); // final score
var initialsEl = document.querySelector("#initials"); // initials
var feedbackEl = document.querySelector("#feedback"); // feedback

var totalScore = 0;

// clicking start button starts quiz and timer

startButtonEl.addEventListener("click", function () {
  startQuiz();
  startTimer();
});

// event listener added to start button

function startQuiz() {
  startScreenEl.classList.add("hide");
  questionsEl.classList.remove("hide");

  renderQuestion();
}

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  var questionText = currentQuestion.title;

  questionTitlesEl.textContent = questionText;
  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button");

    button.setAttribute(
      "style",
      "margin: 10px; width: 100%; min-height: 70px;"
    );
    button.textContent = currentQuestion.choices[i];
    // button.textContent = arrayChoices[i];

    button.setAttribute("data-question", questionIndex);

    button.addEventListener("click", function () {
      var questionAnswer = currentQuestion.answer;
      console.log(questionAnswer);
      /**
         * create var that references button text
         * add if statement to check question equals text of button clicked
         * if correct, render next question using questionIndex and renderQuestion function
         * if wrong, remove time
         * also add check to see if you've reached the last question and end game then
        
         */

      if (this.textContent == questionAnswer) {
        // correct
        feedbackEl.textContent = "Correct!";
        feedbackEl.setAttribute("style", "color: green;");
        let correctSound = new Audio("./assets/sfx/correct.wav");
        correctSound.play();

        totalScore += 10;
        questionIndex++;
        if (questionIndex === questions.length) {
          console.log("Finished all questions!");
          gameOver();
        } else {
          renderQuestion();
        }
      } else {
        // wrong
        feedbackEl.textContent = "Wrong!";
        secondsLeft = secondsLeft - 10; // takes 10 seconds from countdown
        let wrongSound = new Audio("./assets/sfx/incorrect.wav");
        wrongSound.play();
      }
    });
    choicesEl.appendChild(button);
    feedbackEl.classList.remove("hide");
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    countdownTimer.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      gameOver();
    }
  }, 1000);
}

// function that starts the quiz and the timer above

// once the quiz starts few questions need to be displayed

// each question has three choices and one answer is correct

// once the choice is made the next question button is pressed next question is presented
// if answer is incorrect 10 seconds is deducted from the timer

// when the timer reaches 0 the quiz is over

function gameOver() {
  console.log("your score: " + totalScore);
  finalScoreEl.textContent = totalScore;
  endScreenEl.classList.remove("hide");
  feedbackEl.classList.add("hide"); // hide the feedback
  questionsEl.classList.add("hide"); // hides last question
  countdownTimer.textContent = "0"; // reset timer interval
  clearInterval(timerInterval);
}

submitButtonEl.addEventListener("click", function () {
  savedScore();
});

// score is saved in local storage

function savedScore() {
  var scores = JSON.parse(localStorage.getItem("scores")) || []; // look it up again

  var userInitials = initialsEl.value.trim();

  if (userInitials === "") {
    alert("Please enter your initials");
  } else if (userInitials.length > 3) {
    alert("Initials must be 3 characters or less");
  } else {
    var scoreObject = {
      initials: userInitials,
      score: totalScore,
    };

    scores.push(scoreObject);

    localStorage.setItem("scores", JSON.stringify(scores));

    console.log("Player's initials: " + localStorage.getItem("user-initials"));
    console.log("Player's score: " + localStorage.getItem("user-score"));
    window.location.assign("highscores.html");
  }
}
