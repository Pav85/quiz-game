// variables that need to be set
var questionIndex = 0

var countdownTimer = document.querySelector('#time');  // timer 
var secondsLeft = 90     
                          // timer 

var timerEl = document.querySelector("#timer");  // timer 
var startButtonEl = document.querySelector('#start');    // start button
var submitButtonEl = document.querySelector('#submit'); // submit button
var startScreenEl = document.querySelector('#start-screen'); // start screen
var questionsEl = document.querySelector('#questions'); // questions
var choicesEl = document.querySelector('#choices'); // choices
var questionTitlesEl = document.querySelector('#question-title'); // question title
var endScreenEl = document.querySelector('#end-screen'); // end screen
var finalScoreEl = document.querySelector('#final-score'); // final score
var initialsEl = document.querySelector('#initials'); // initials
var feedbackEl = document.querySelector('#feedback'); // feedback

var totalScore = 0;







// clicking start button starts quiz and timer

startButtonEl.addEventListener('click', function() {   
    startQuiz();
    startTimer();
})

// event listener added to start button 

function startQuiz() {
    
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");

    renderQuestion();
};

    var currentQuestion = questions[questionIndex];
    var questionText = currentQuestion.title;
    
    

function renderQuestion() {
    // var currentQuestion = questions[questionIndex];
    // var questionText = currentQuestion.title;
//    questionIndex = x;  // index of question added to try 
//    var nextQuestion = questions[questionIndex+1]; // index of next question added to try 

    questionTitlesEl.textContent = questionText;


    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement('button');
        
        button.setAttribute('style', 'margin: 10px; width: 100%; min-height: 70px;');
        button.textContent = currentQuestion.choices[i];
        // button.textContent = arrayChoices[i];

        button.setAttribute('data-question', questionIndex)
        button.addEventListener('click', function() {
        var questionAnswer = currentQuestion.answer
        console.log(questionAnswer)
        /**
         * create var that references button text
         * add if statement to check question equals text of button clicked
         * if correct, render next question using questionIndex and renderQuestion function
         * if wrong, remove time
         * also add check to see if you've reached the last question and end game then
        
         */
        

        if (this.textContent == questionAnswer) {
            // correct
            feedbackEl.textContent = 'Correct!';
            feedbackEl.setAttribute('style', 'color: green;')
            
            nextQuestion();
            totalScore += 10;
            
        } else {
            // wrong
            feedbackEl.textContent = 'Wrong!';
            secondsLeft = secondsLeft - 10;  // takes 10 seconds from countdown
        }
        
        });
        choicesEl.appendChild(button);
        feedbackEl.classList.remove('hide');
        
    };
        
    
};


function startTimer() {
    
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countdownTimer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endScreenEl.classList.remove("hide");
            feedbackEl.classList.add("hide");  // hide the feedback 
            countdownTimer.textContent = "0"; // reset timer interval
            gameOver(); // not sure if it needs to be here
        };}, 1000);

};

// function that starts the quiz and the timer above

// var nextQuestion = questions[questionIndex++];


function nextQuestion() {
    

     
};
    



    


// once the quiz starts few questions need to be displayed 

// each question has three choices and one answer is correct

// once the choice is made the next question button is pressed next question is presented
// if answer is incorrect 10 seconds is deducted from the timer 

// when the timer reaches 0 the quiz is over 

function gameOver() {
    console.log("your score: " + totalScore);
    finalScoreEl.textContent = totalScore;
    
};


// score is saved in local storage

function savedScore() {

};

function highScores() {};