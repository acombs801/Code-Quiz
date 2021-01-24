


// if question answered incorrectly time is lost
// When all questions are answered timer stops 
// When timer stops game asks you to save initials
// Saves initials and score to local storage 
var start= document.querySelector("#startquiz");
var qBox= document.querySelector("#questions");
var timerE1= document.querySelector("#timer");
var answers= document.querySelector("#answers");

var questionCount = 0;
var timeLeft= 40;
var score= 0;
var correctAnswer;
var questions = [
    {
        q: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        
        a: ['While loop', 'Else loop', 'For loop', 'Conditional loop'],
        
        correct: "While loop",
    },
    {
        q: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        
        a: ['Strings', 'Arrays', 'Recorders', 'Variables'],
        
        correct: "Strings",
    },
    {
        q: "What is considered to be the most popular programming language in the world?",
        
        a: ['JavaScript', 'Bootstrap', 'JQuery', 'Html'],
        
        correct: "JavaScript",
    },
    {
        q: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        
        a: ['Output', 'Syntax', 'JSON', 'Scope'],
        
        correct: "Syntax",
    },
    {
        q: "Is JavaScript a front-end, back-end, or full-stack programming language?",

        a: ['Front-end', 'Back-end','Full-stack'],

        correct: "Full-Stack",
    }]

// Clicking 'Start Quiz' shows the first question and starts Timer.

start.addEventListener('click', function(){
    start.setAttribute('style', 'display: none;');
    displayQuestion(0);
    timer();
});

// Waits for 'on click' event on an answer then decides if its correct or not, points

answers.addEventListener('click', function(event){
    var element = event.target;
    if(element.matches('button')){

        if(element.textContent == questions[questionCount].correct){
            score+=5;
        } else{
            score-=0;
            timeLeft-=5;
        }
    } 
    console.log(score);
    questionCount++;
    qBox.innerHTML = '';
    answers.innerHTML = '';
    displayQuestion(questionCount);
});

function timer() {
    var timerInterval = setInterval(function(){
        timeLeft--;
         timerE1.innerHTML= 'Time left: <span>' + timeLeft + '</span> seconds';

        if(questionCount === questions.length){
            if(timeLeft > 0){
                clearInterval(timerInterval);
               timerE1.innerHTML = '';
            }
        }else if (timeLeft <= 0){
                clearInterval(timerInterval);
            timerE1.innerHTML = 'Times up!';
        
           showScore();
        
        }
        
    }, 1000);
}

