var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

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

var MAX_QUESTIONS = 5;

var startQuiz = function() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [questions];
    console.log(availableQuestions);
    getNewQuestion();
};

var getNewQuestion = function() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
})
};

startQuiz();