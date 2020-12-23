$(document).ready(function () {
    // start button and store
    var startBtn = document.getElementById("start");
    var questionsElement = document.getElementById("questions");
    var startScreen = document.querySelector("#start-screen");
    var timeEll = document.getElementById("time");
    var mainEl = document.querySelector("#end-screen");
    var questionsChoices = document.querySelector("#choices");
    var questionTitle = document.querySelector("#questions-title");
    var pElement = document.querySelector("#msgCorrect");
    var questionsIndex = -1;
    var currentQuestion;
    var correctAnswer;
    var timerInterval;
    var secondsLeft = 100;
    //  var submitBtn = document.getElementById("submit");
    var finalScoreEl = document.querySelector("#final-score");


    //  submitBtn.addEventListener('click', saveUser);
    // event listener
    startBtn.onclick = startQuiz;
    // submitBtn.onclick = saveUser;
    // funtion to start quiz
    function startQuiz() {

        startScreen.setAttribute("class", "hide");


        // unhide the questions
        questionsElement.removeAttribute("class");
        console.log(questions[0].title)
        console.log(questions[0].choices)
        timeEl();
        getCurrentQuestion();
        // getCurrentChoices();
    }

    function getCurrentQuestion() {
        questionsIndex++
        console.log(questionsIndex);
        console.log(questions.length);

        if (questionsIndex < questions.length) {

            questionsChoices.innerHTML = "";
            //print the title of the question
            questionTitle.textContent = questions[questionsIndex].title;
            correctAnswer = questions[questionsIndex].answer;
            currentQuestions = questions[questionsIndex].choices;



            // for loop 
            for (let i = 0; i < currentQuestions.length; i++) {
                var choices2 = document.createElement("li");
                choices2.textContent = currentQuestions[i];
                answerBtn = questionsChoices.appendChild(choices2).setAttribute("class", "list-group-item");

            }
        }
        else {
            clearInterval(timerInterval);

            sendMessage();
        }
    }

    function timeEl() {
        // timer added to page
        timerInterval = setInterval(function () {
            secondsLeft--;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                console.log("Timer Exipred");
                sendMessage();
            }
            timeEll.textContent = secondsLeft + " seconds left till Game Over";
        }, 1000);

    }

    function sendMessage() {
        //timeEll.textContent = "";

        var imgEl = document.createElement("img");

        imgEl.setAttribute("src", "./assets/images/game-over-escape-room_LI.jpg");
        // add img to screen
        mainEl.appendChild(imgEl);
        mainEl.removeAttribute("class");
        questionsElement.setAttribute("class", "hide");
        finalScoreEl.innerHTML = secondsLeft;
        userNameInput = document.getElementById("initials");

        // create a new object with name and score keys
        var newScore = {
            name: userNameInput,
            score: secondsLeft
        };
        //submitBtn.onclick = saveUser();
        // check if there are scores in local storage first and take value
        //if not, make a blank array
        // KEY IS HIGHSCORES EVERYTIME. NEED TO FIX
        var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
        // push object into score array
        highScores.push(newScore);
        // turn objects into an array of strings + put it into local storage
        localStorage.setItem("highScores", JSON.stringify(highScores));

    }
    // NEED TO WORK ON BELOW CODE. WAS NOT WORKING
    // function saveUser() {
    //     console.log("save user");
    //     // By having the function be TRIGGERED by a 'click' event within this function we capture the VALUE from the USER SUBMIT BUTTON
    //     var userNameInput = document.getElementById("initials").value;

    //     console.log("Saving User" + userNameInput);
    //     userScore = timeLeft;
    //     console.log(userScore);
    //     var newUser = {
    //         username: userNameInput,
    //         score: userScore
    //     }
    //     console.log(newUser);

        
    // }



    questionsChoices.addEventListener("click", function (event) {

        if (correctAnswer === event.target.textContent) {
            // sec stay same 
            pElement.innerHTML = "YES!";

        } else {
            pElement.innerHTML = "BOOO. NO!";
            //  wrong answer -10 sec
            secondsLeft = secondsLeft - 10;

        }

        getCurrentQuestion();

    })

});