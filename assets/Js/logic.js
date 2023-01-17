// variables that need to be set

// var = questionIndex = 0;  // not sure if i need this yet

var countdownTimer = document.querySelector('#time');  // timer 
var secondsLeft = 90                                   // timer 

var timerEl = document.querySelector("#timer");  // timer 
var startButtonEl = document.querySelector('#start');    // start button
var submitButtonEl = document.querySelector('#submit'); // submit button
var startScreenEl = document.querySelector('#startScreen'); // start screen
var questionsEl = document.querySelector('#questions'); // questions
var choicesEl = document.querySelector('#choices'); // choices
var questionTitlesEl = document.querySelector('#question-title'); // question title
var endScreenEl = document.querySelector('#end-screen'); // end screen
var finalScoreEl = document.querySelector('#final-score'); // final score
var initialsEl = document.querySelector('#initials'); // initials
var feedbackEl = document.querySelector('#feedback'); // feedback



// clicking start button starts quiz and timer

startButton.addEventListener('click', function {   
    startQuiz();
    startTimer();
})

// event listener added to start button 

function startQuiz() {
    // startScreenEl.setAttribute('class', 'hide'); // hide start screen
    
    

};


function startTimer() {
    // secondsLeft--;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

    }, 1000)
};

// function that starts the quiz and the timer above



function nextQuestion() {

};

// once the quiz starts few questions need to be displayed 

// each question has three choices and one answer is correct

// once the choice is made the next question button is pressed next question is presented
// if answer is incorrect 10 seconds is deducted from the timer 

// when the timer reaches 0 the quiz is over 

function gameOver() {

};


// score is saved in local storage

function savedScore() {

};

function highScores() {};