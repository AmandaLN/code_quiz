// start button and store
var startBtn = document.getElementById("start");
// event listener
startBtn.onclick = startQuiz;
// funtion to start quiz
function startQuiz() {
    var startScreen = document.getElementById("#start-screen");
    startScreen.setAttribute("class", "hide")
}