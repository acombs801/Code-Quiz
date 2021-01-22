// Clicking 'Start Quiz' shows the first question and starts Timer.
// Use event listener on click to start function to show question and start timer
// When question is answered next question is shown 
// Shows whether Q was answered correctly or not + time lost
// if question answered incorrectly time is lost
// When all questions are answered timer stops 
// When timer stops game asks you to save initials
// Saves initials and score to local storage 
// Use 'viewHighscore' to see saved scores

var viewHighscore= document.querySelector("#highscore");
var start= document.getElementById(".start")
var timeE1= document.getElementById(".timer")
console.log(start);
var answers= document.querySelector("#answers")

var timeLeft= 40;
var score= 0;

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
        
        correct: "Syntax"
    },

];

$(document).ready(function(){
    $("start").on("click", setTime, quizShow) 

        function quizShow(){
             
            while(questions.length) {
               
                var index = Math.floor( Math.random()* questions.length );
                 questions.splice( index, 1 ); 
                console.log(index);
    
                            };
                        }

})




