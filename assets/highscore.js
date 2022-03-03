var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveBtn");
var mostRecentScore = localStorage.getItem("mostRecentScore");
higscore.innerText = mostRecentScore;
var backBtn = document.getElementById("back-btn");

username.addEventListener("keyup", () => {
    console.log(username.value);
});

saveHighScore = e => {
    console.log("clicked");
    e.preventDefault();
};

var goBack = function (event) {
    event.preventDefault();
    startQuiz();
};
