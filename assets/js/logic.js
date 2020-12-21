// start button and store
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("questions")
var startScreen = document.querySelector("#start-screen");
var timeEll = document.getElementById("time");
var mainEl = document.querySelector("#end-screen")
// event listener
startBtn.onclick = startQuiz;

// funtion to start quiz
function startQuiz() {
    
    startScreen.setAttribute("class", "hide")
   
// unhide the questions
    questionsElement.removeAttribute("class");
    timeEl();
}

function timeEl() {
    var secondsLeft = 100;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEll.textContent = secondsLeft + " seconds left till Game Over";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
        
    
      }, 1000);

}

function sendMessage() {
    timeEll.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "./assets/images/game-over-escape-room_LI.jpg");

    mainEl.appendChild(imgEl);
    mainEl.removeAttribute("class");
    questionsElement.setAttribute("class", "hide");
 
    
  
  }