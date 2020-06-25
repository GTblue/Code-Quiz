//array of questions objects

var container = document.querySelector(".container");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var correct = document.getElementById("correctAnswer");
var highScore = document.getElementById("highScore");
var finish = document.getElementById("finish")
// var div = document.getElementById("answers");
var button = document.getElementById("startButton");
var timerEl = document.querySelector("timer");
var pTags = document.querySelector("p");

var secondsLeft = 75;
var setInterval;

var index = 0

var questions = [
    {question: "Commonly used data types DO NOT include:",   
    answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"], 
    correct: "3. alerts"
    },
    {question: "The condition in an if/else statement is enclosed within ________.",   
    answer: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
    correct: "2. curly brackets"
    },
    {question: "Arrays in Javascript can be used to store _________.",   
    answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all the above"], 
    correct: "4. all the above"
    },
    {question: "String values must be enclosed within _________ when being assigned to variables.",   
    answer: ["1. commas", "2. empty brackets", "3. quotes", "4. parentheses"], 
    correct: "quotes"
    },
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",   
    answer: ["1. Javascript", "2. terminal bash", "3. forloops", "4. console.log"], 
    correct: "4. console.log"
    }
]

function displayQuestions(){
    var currentquestion = questions[index].question
    segment.textContent = currentquestion
    console.log(currentquestion)
    for (var i=0; i < questions[index].answer; i++){
        // console.log(questions[index].answer[i])
        console.log(i)
    }
}


button.addEventListener("click", function(){
    displayQuestions()
});


// for (var i=0; i < questions.length; i++)
//     if Question !== correct{
//         alert(Wrong!)
//     } else {
//         alert(Correct!)
//     }
//     if Questioin_Two !==
// function Display

// button.onclick = DisplayQuestions

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timerEl.textContent = "You have " + secondsLeft;
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);



