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
  }
];

const state = {
  counter: "0",
  correct: "0",
  total: "10",
}


/*const letterObj = [
  {
    name: "Z",
    image: "url('letters/Z.svg')",
    gif: "url('gifs/Z.gif')",
    opacity: "0.2",
    color: "gray",
  },
  {
    name: "O",
    image: "url('letters/O.svg')",
    gif: "url('gifs/O.gif')",
    opacity: "0.4",
    color: "gray",
  },
  {
    name: "D",
    image: "url('letters/D.svg')",
    gif: "url('gifs/D.gif')",
    opacity: "0.6",
    color: "gray",

  },
  {
    name: "I",
    image: "url('letters/I.svg')",
    gif: "url('gifs/I.gif')",
    opacity: "0.8",
    color: "gray",
  },
  {
    name: "A",
    image: "url('letters/A.svg')",
    gif: "url('gifs/A.gif')",
    opacity: "0.9",
    color: "gray",
  },
  {
    name: "C",
    image: "url('letters/C.svg')",
    gif: "url('gifs/C.gif')",
    opacity: "1",
    color: "rgb(25, 189, 25)",
  }
]


function generateFrontPage() {
  let title = document.createElement("div");
  title.className = "title";
  for (let i = 0; i < 6; i++) {
    let newLetter = document.createElement("div");
    newLetter.className = "letter";
    newLetter.style.backgroundImage = letterObj[i].image;
    title.appendChild(newLetter);
  } 
    return title;
}

function generateStartButton() {
 return `<button class="start-button">BEGIN</button>`;
}

function renderFrontPage() {
  
  let title = generateFrontPage();
  let button = generateStartButton();
  document.querySelector("main").append(title);
  document.querySelector("main").innerHTML = button;
}

$(".letter").on("click", function() {
  let indexNumber = $(this).index();
  let letter = letterObj[indexNumber].gif;
  $(this).css()
})*/

function generateFrontPage() {
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


function generateQuestion(question, option1, option2, option3, option4) {
  
  return `<div class="box question">
            
  <fieldset>
      <legend class="question">${question}</legend>
  
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
  </fieldset>
  <button class="button submit">SUBMIT</button>
  </div> `
}


function renderFrontPage() {
  let front = generateFrontPage();
  document.querySelector("main").innerHTML = front;
}
  

function renderQuestion() {
  let question = questions[state.counter].question;
  let option1 = questions[state.counter].option1;
  let option2 = questions[state.counter].option2;
  let option3 = questions[state.counter].option3;
  let option4 = questions[state.counter].option4;
  let returnedQuestion = generateQuestion(question, option1, option2, option3, option4);
  document.querySelector("main").innerHTML = returnedQuestion;
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
}

function renderIncorrect() {
  $(".question").addClass("hidden");
  let incorrect = generateIncorrect();
  document.querySelector("main").innerHTML = incorrect;
}

// HANDLERS

function startQuiz() {
  $(".start-button").on("click", function() {
    let splashScreen = document.querySelector(".zodiac-title");
    splashScreen.remove();
    renderQuestion();
   });
}

  
  $(".submit").on("click", function() {
    let answer = questions[state.counter].answer;
    let checkedAnswer = $("input[name='options']:checked").val();
    if (answer === checkedAnswer) {
      renderCorrect();
    } else {
      renderIncorrect();;
    }
  })


$(".next").on("click", function nextQuestion() {
  addToCounter();
  generateCounter(state.counter, state.correct, state.total);
  renderQuestion();
}
);


renderFrontPage();
startQuiz();