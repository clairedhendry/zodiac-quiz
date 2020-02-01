"use strict";
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
  },
    {
    question: "If your birthday is January 1st, what is your Zodiac sign?",
    option1: "Virgo",
    option2: "Sagittarius",
    option3: "Aquarius",
    option4: "Capricorn",
    answer: "Capricorn",
  },
  {
    question: "What Zodiac's main traits are charming and witty?",
    option1: "Capricorn",
    option2: "Gemini",
    option3: "Scorpio",
    option4: "Pisces",
    answer: "Capricorn",
  },
  {
    question: "How many Zodiac signs are there?",
    option1: "6",
    option2: "12",
    option3: "10",
    option4: "14",
    answer: "12",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  },
];


const state = {
  counter: "0",
  correct: "0",
  total: "10",
}


const letterObj = [
  {
    name: "Z",
    image: "letters/Z.svg",
    gif: "gifs/Z.gif",
    opacity: "0.2",
    color: "gray",
  },
  {
    name: "O",
    image: "letters/O.svg",
    gif: "gifs/O.gif",
    opacity: "0.4",
    color: "gray",
  },
  {
    name: "D",
    image: "letters/D.svg",
    gif: "gifs/D.gif",
    opacity: "0.6",
    color: "gray",

  },
  {
    name: "I",
    image: "letters/I.svg",
    gif: "gifs/I.gif",
    opacity: "0.8",
    color: "gray",
  },
  {
    name: "A",
    image: "letters/A.svg",
    gif: "gifs/A.gif",
    opacity: "0.9",
    color: "gray",
  },
  {
    name: "C",
    image: "letters/C.svg",
    gif: "gifs/C.gif",
    opacity: "1",
    color: "rgb(25, 189, 25)",
  }
]

function generateFrontPage() {
  return `<div class="zodiac-title">
<input type="image" src="letters/Z.png" class="letters" id="Z" alt="letter Z"/>
<input type="image" src="letters/O.png" class="letters" id="O" alt="letter O"/>
<input type="image" src="letters/D.png" class="letters" id="D" alt="letter D"/>
<input type="image" src="letters/I.png" class="letters" id="I" alt="letter I"/>
<input type="image" src="letters/A.png" class="letters" id="A" alt="letter A"/>
<input type="image" src="letters/C.png" class="letters" id="C" alt="letter C"/>
</div>
<button class="start-button">BEGIN</button>`;
}


function generateQuestion(question, option1, option2, option3, option4) {
  
  return `<div class="box question">
            
  <fieldset>
      <legend class="question"></legend>
      <div>
      <span class="question">${question}</span>
      </div>
      <div>
      <input type="radio" name="options" id="option1" value="${option1}">
      <label for="option1">${option1}</label>
      <br>
      <input type="radio" name="options" id="option2" value="${option2}">
      <label for="option2">${option2}</label>
      <br>
      <input type="radio" name="options" id="option3" value="${option3}">
      <label for="option3">${option3}</label>
      <br>
      <input type="radio" name="options" id="option4" value="${option4}">
      <label for="option4">${option4}</label>
      </div>
  </fieldset>
  <button class="button submit">SUBMIT</button>
  </div> `
}


function renderFrontPage() {
  let front = generateFrontPage();
  document.querySelector("main").innerHTML = front;
}
  
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function renderQuestion() {
 // let num = getRandomIntInclusive(0, (questions.length - 1));


  let question = questions[state.counter].question;
  let option1 = questions[state.counter].option1;
  let option2 = questions[state.counter].option2;
  let option3 = questions[state.counter].option3;
  let option4 = questions[state.counter].option4;
  let returnedQuestion = generateQuestion(question, option1, option2, option3, option4);
  document.querySelector("main").innerHTML = returnedQuestion;

  // questions.splice(num, 1);
  // return questions;
} 

function generateCounter(counter, numberCorrect, total) {
  return `<div class="counter">
  <p>${counter} out of ${total}</p>
  <p>${numberCorrect} correct</p>
</div>`
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

function renderCorrect() {
  $(".question").addClass("hidden");
  let correct = generateCorrect();
  document.querySelector("main").innerHTML = correct;
  state.correct++;
}

function renderIncorrect() {
  $(".question").addClass("hidden");
  let incorrect = generateIncorrect();
  document.querySelector("main").innerHTML = incorrect;
}

// FALLING IMAGES

function fallingImages() {
  const DODGER = document.getElementById('dodger');
  const GAME = document.getElementById('game');
  const GAME_HEIGHT = 1000;
  const GAME_WIDTH = 2000;
  const ROCKS = [];
  var gameInterval = null;
  
  
  const ICONS = [
    `url("icons/aquarius.svg")`,
    `url("icons/aries.svg")`,
    `url("icons/taurus.svg")`,
    `url("icons/gemini.svg")`,
    `url("icons/leo.svg")`,
    `url("icons/virgo.svg")`,
    `url("icons/libra.svg")`,
    `url("icons/scorpio.svg")`,
    `url("icons/capricorn.svg")`,
    ]
         
  function createRock(x, y) {
    const rock = document.createElement('div');
    rock.style.backgroundImage = ICONS[y];
    rock.className = 'rock';
    rock.style.left = `${x}px`;
    var top2 = rock.style.top = 0;
    GAME.appendChild(rock);
   
    function moveRock() {
      
       rock.style.top = `${top2+=2}px`;
        if (top2 < GAME_HEIGHT){
         window.requestAnimationFrame(moveRock);
       } else {
         rock.remove();
       }}
 
    window.requestAnimationFrame(moveRock);
    ROCKS.push(rock);
    return rock;
  }
 
  function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }
  
  function start() {
    
    gameInterval = setInterval(function() {
      createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)), (Math.floor(Math.random() * 12) + 1))
    }, 500)
  }
  
  start();
  }

// HANDLERS

function startQuiz() {
  $(".start-button").on("click", function(event) {
    let splashScreen = document.querySelector(".zodiac-title");
    splashScreen.remove();
    renderQuestion();
   });
}


function animateLetters() {
  $(".letters").on("click", function(event) {
    const indexNumber = $(this).index();
    const letter = letterObj[indexNumber].gif;
    $(this).attr("src", letter);
  });
  }
  
  
 function submitAnswer() {

  $("body").on("click", ".submit", function(event) {
    let answer = questions[state.counter].answer;
    let checkedAnswer = $("input[name='options']:checked").val();
    if (answer === checkedAnswer) {
      renderCorrect();
      fallingImages();
    } else {
      renderIncorrect();;
    }
  });
}


function nextQuestion() {
  $("body").on("click", ".next", function(event) {
  state.counter++;
  generateCounter(state.counter, state.correct, state.total);
  renderQuestion();
}
);
}

renderFrontPage();
startQuiz();

$(submitAnswer);
$(nextQuestion);
$(animateLetters);