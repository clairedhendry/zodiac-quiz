"use strict";



// SPLASH SCREEN ANIMATIONS

$('#Z').on({
    'click': function(){
        $('#Z').attr('src','gifs/Z.gif');
        $("button").fadeTo(500, 0.2);
        $("button").css("background-color", "gray");
        }
     });

$('#O').on({
    'click': function(){
        $('#O').attr('src','gifs/O.gif');
        if (($("button").css("opacity")) >= 0.2) {
        $("button").fadeTo(500, 0.4);
        $("button").css("background-color", "gray");
      };
    }
});

$('#D').on({
    'click': function(){
        $('#D').attr('src','gifs/D.gif');
        if (($("button").css("opacity")) >= 0.4) {
        $("button").fadeTo(500, 0.6);
        $("button").css("background-color", "gray");
      };
    }
});

$('#I').on({
    'click': function(){
        $('#I').attr('src','gifs/I.gif');
        if (($("button").css("opacity")) >= 0.6) {
        $("button").fadeTo(500, 0.8);
        $("button").css("background-color", "gray");
      };
    }
});

$('#A').on({
    'click': function(){
        $('#A').attr('src','gifs/A.gif');
        if (($("button").css("opacity")) >= 0.8) {
        $("button").fadeTo(500, 0.9);
        $("button").css("background-color", "gray");
      }; 
    }
});

$('#C').on({
    'click': function(){
        $('#C').attr('src','gifs/C.gif');
        if (($("button").css("opacity")) >= 0.9) {
        $("button").fadeTo(500, 1);
        $("button").css("background-color", "green");
      };
    }
});


// DATA

const questions = [
  {
    question: "What animal represents the Zodiac Cancer?",
    option1: "Lion",
    option2: "Crab",
    option3: "Eagle",
    option4: "Rat",
    answer: "Crab",
  },
  {
    question: "What Zodiac's main traits are artistic and stubborn?",
    option1: "Aries",
    option2: "Leo",
    option3: "Scorpio",
    option4: "Taurus",
    answer: "Taurs",
  }
];

// START

//What needs to happen:
//When the start button is green/opacity 1 and clicked, a question fieldset is generated
//Questions are randomly selected from array, then sliced out --> array is copied first? 
//Don't want to change original array
//When answer is selected, check if correct
//If correct, congrats message
//If wrong, different message
//Generate next question fieldset
//Update counter and number of correct
//Repeat until 10 questions are answered
//Display final message based on number correct

$("button").on("click", function() {
  if ( ($("button").css("opacity")) === "1" ) {
    let title = document.querySelector(".zodiac-title");
    let startButton = document.querySelector(".start-button");
    title.remove();
    startButton.remove();
    }
});


// i grabs a random question from the array


function generateQuestion() {

  let max = questions.length;

  let i = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let questionFieldset = document.createElement("FIELDSET");
  questionFieldset.setAttribute("class", "question");
  var textNode = document.createTextNode("$(questions[i].question)");
  questionFieldset.appendChild(textNode);
  document.main.appendChild(questionFieldset);
  
  let input = document.main.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", "options");
  input.setAttribute("id", "option1");
  input.setAttribute("value", "0");
  

//Fieldset block should look like:
//<legend class="question">$(questions[i].question)</legend>
//<input type="radio" name="options" id="option1" value="0">
//<label for="option1">$(question[i].option1)</label>
//<br>
//<input type="radio" name="options" id="option2" value="1">
//<label for="option2">$(question[i].option2)</label>
//<br>
//<input type="radio" name="options" id="option3" value="2">
//<label for="option3">$(question[i].option3)</label>
//<br>
//<input type="radio" name="options" id="option4" value="3">
//<label for="option4">$(question[i].option4)</label>



}



// QUIZ EVENT HANDLERS



let counter = 0;
//counter keeps track of current question number out of 10


// if option selected === answer, congrats message
// if not, other message
// 
function correctOrNo() {

}

// on click of congrats/wrong message, generates new fieldset, updates counter and displays
function nextQuestion() {
  counter++;
  //need to slice off previous question i from array
  generateQuestion();   
  
}


