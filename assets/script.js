var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var incorrect = document.getElementById("incorrect");
var correct = document.getElementById("correct");
var timer = document.getElementById("timer");

// timer functions
var timeLeft = 50;

var countdown = function() {
    timeLeft--;
    timer.innerHTML = timeLeft;
    if(timeLeft === 0) {
        clearInterval(startCountdown);
    }
};

var startCountdown = setInterval(countdown, 1000);




var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

// quiz questions
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<js",
        choice2: "<script>",
        choice3: "<scripting>",
        choice4: "<java-forever>",
        answer: 2
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "<body>",
        choice2: "<head>",
        choice3: "<body> and <head>",
        choice4: "Maybe none",
        answer: 3
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choice1: "/*-- this is comment --*/",
        choice2: "<this is comment",
        choice3: "// this is comment",
        choice4: "! this is comment !",
        answer: 3
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var colors = [red, green, blue]",
        choice2: "var colors => (red, green, blue)",
        choice3: "var colors = array of colors",
        choice4: "js doesn't have arrays",
        answer: 1
    },
    {
        question: "JavaScript is the same as Java?",
        choice1: "Yes",
        choice2: "No",
        choice3: "Maybe",
        choice4: "I don't know",
        answer: 2
    },
]

// main quiz functions
var MAX_QUESTIONS = 5;

var startQuiz = function() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

var getNewQuestion = function() {
    if (availableQuestions.length === 0) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./endgame.html");
    }

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
})

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

// correct and incorrect choices
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        
    acceptingAnswers = false;    
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];

    var classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
        correct.classList.remove("hide");
    } else {
        incorrect.classList.remove("hide")
    }
    
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout( () => {
    selectedChoice.parentElement.classList.remove(classToApply);
    correct.classList.add("hide")
    incorrect.classList.add("hide")
    getNewQuestion();
    }, 1000);
    });
});

startQuiz();