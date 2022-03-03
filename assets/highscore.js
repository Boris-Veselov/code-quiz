var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var mostRecentScore = localStorage.getItem("mostRecentScore");
higscore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
});

saveHighScore = e => {
    console.log("clicked");
    e.preventDefault();
};
    