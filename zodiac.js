"use strict";



// SPLASH SCREEN ANIMATIONS

/*
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
*/

$(".letters").on("click", function() {
    $(this).attr("src", "gifs/Z.gif");
  }
);  



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
    answer: "Taurus",
  },
  {
    question: "Which Zodiac is represented by the centaur?",
    option1: "Pieces",
    option2: "Sagittarius",
    option3: "Scorpio",
    option4: "Gemini",
    answer: "Sagittarius",
  },
  {
    question: "What Zodiac's main traits are being a fiercely strong leader?",
    option1: "Leo",
    option2: "Virgo",
    option3: "Scorpio",
    option4: "Taurus",
    answer: "Leo",
  },
  {
    question: "Which Zodiac is known for being very in touch with their emotions?",
    option1: "Gemini",
    option2: "Aquarius",
    option3: "Aries",
    option4: "Cancer",
    answer: "Cancer",
  }
];

// START

//What needs to happen:
//When the start button is green/opacity 1 and clicked, a question fieldset is generated
//Questions are randomly selected from array, then sliced out --> array is copied first? 
//Don't want to change original array -- maybe create new array from remaining and use that -- repeat
//When answer is selected, check if correct against questions[i].answer
//If correct, congrats message
//If wrong, different message
//Generate next question fieldset
//Update counter and number of correct
//Repeat until 10 questions are answered
//Display final message based on number correct




// i grabs a random question from the array

const state = {
  counter: "0",
  correct: "0",
  total: "10",
}


// GENERATE HTML

const letters = [
  `url("letters/Z.png")`,
  `url("letters/O.png")`,
  `url("letters/D.png")`,
  `url("letters/I.png")`,
  `url("letters/A.png")`,
  `url("letters/C.png")`
];

const gifs = [
  `url("gifs/Z.gif")`,
  `url("gifs/O.gif")`,
  `url("gifs/D.gif")`,
  `url("gifs/I.gif")`,
  `url("gifs/A.gif")`,
  `url("gifs/C.gif")`
]

function generateLetters(letters) {
  let title = document.createElement("div");
  title.className = "title";
  for (let i = 0; i < 6; i++) {
    let newLetter = document.createElement("div");
    newLetter.className = "letter";
    newLetter.style.backgroundImage = letters[i];
    title.appendChild(newLetter);
  } return title;
}

function renderFrontPage() {
  let title = generateLetters();
  document.querySelector("main").innerHTML = title;

}

/*function generateFrontPage() {
  return `<div class="zodiac-title">
<img src="letters/Z.png" class="letters" id="Z" alt="letter Z"/>
<img src="letters/O.png" class="letters" id="O" alt="letter O"/>
<img src="letters/D.png" class="letters" id="D" alt="letter D"/>
<img src="letters/I.png" class="letters" id="I" alt="letter I"/>
<img src="letters/A.png" class="letters" id="A" alt="letter A"/>
<img src="letters/C.png" class="letters" id="C" alt="letter C"/>
</div>
<button class="start-button">BEGIN</button>`;
}
*/

function generateQuestion(question, option1, option2, option3, option4) {
  
  return `<div class="box question">
            
  <fieldset>
      <legend class="question">question</legend>
  
      <input type="radio" name="options" id="option1" value="0">
      <label for="option1">option1</label>
      <br>
      <input type="radio" name="options" id="option2" value="1">
      <label for="option2">option2</label>
      <br>
      <input type="radio" name="options" id="option3" value="2">
      <label for="option3">option3</label>
      <br>
      <input type="radio" name="options" id="option4" value="3">
      <label for="option4">option4</label>
  </fieldset>
  <button class="button submit">SUBMIT</button>
  </div> `
}


/*function renderFrontPage() {
  let front = generateFrontPage();
  document.querySelector("main").innerHTML = front;
}*/
  

function renderQuestion() {
  let question = questions[state.counter].question;
  let option1 = questions[state.counter].option1;
  let option2 = questions[state.counter].option2;
  let option3 = questions[state.counter].option3;
  let option4 = questions[state.counter].option4;
  let returnedQuestion = generateQuestion();
  document.querySelector("main").innerHTML = returnedQuestion;
} 

function generateCorrect() {
  return `<div class="box correct">
  <img class="icon"/>
  <p>Correct!</p>
  <button class="next">NEXT</button>
</div>`
}

function generateIncorrect() {
  return `<div class="box incorrect">
  <img class="icon"/>
  <p>Sorry, not quite!</p>
  <button class="next">NEXT</button>
</div>`
}

function generateCounter(counter, numberCorrect, total) {
  return `<div class="counter">
  <p>${counter} out of ${total}</p>
  <p>${numberCorrect} correct</p>
</div>`
}

function addToCounter() {
  state.counter++;
  return state.counter;
}

// HANDLERS

function startQuiz() {
  $(".start-button").on("click", function() {
    let splashScreen = document.querySelector(".zodiac-title");
    splashScreen.remove();
    renderQuestion();
    nextQuestionButton();  
    });
}

function checkAnswer() {
  
  $(".submit").on("click", function() {
    let answer = questions[state.counter].answer;

  //check if answer matches option selected
    
  })
}

function checkInput(input) {
  if (document.querySelector(input).checked === true) {
    return input;
  } else {
    return null;
  }
}

$(".next").on("click", function nextQuestion() {
  addToCounter();
  generateCounter(state.counter, state.correct, state.total);
  renderQuestion();
}
);



//let correct = generateCorrect();
//document.querySelector("main").innerHTML = correct;
renderFrontPage();
startQuiz();

