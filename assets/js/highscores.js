userNameInput = document.getElementById("initials");
    
    // create a new object with name and score keys
var newScore = {
        name: userNameInput,
        score: secondsLeft
    };
    submitBtn.onclick = submit;
    // check if there are scores in local storage first and take value
    //if not, make a blank array
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // push object into score array
    highScores.push(newScore);
    // turn objects into an array of strings + put it into local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    