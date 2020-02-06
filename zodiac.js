"use strict";
// DATA


const questions = [
  {
    id: "q1",
    question: "What animal represents the Zodiac Cancer?",
    option1: "Lion",
    option2: "Crab",
    option3: "Eagle",
    option4: "Rat",
    answer: "Crab",
  },
  {
    id: "q2",
    question: "What Zodiac's main traits are artistic and stubborn?",
    option1: "Aries",
    option2: "Leo",
    option3: "Scorpio",
    option4: "Taurus",
    answer: "Taurus",
  },
  {
    id: "q3",
    question: "Which Zodiac is represented by the centaur?",
    option1: "Pisces",
    option2: "Sagittarius",
    option3: "Scorpio",
    option4: "Gemini",
    answer: "Sagittarius",
  },
  {
    id: "q4",
    question: "What Zodiac's main traits are being a fiercely strong leader?",
    option1: "Leo",
    option2: "Virgo",
    option3: "Scorpio",
    option4: "Taurus",
    answer: "Leo",
  },
  {
    id: "q5",
    question: "Which Zodiac is known for being very in touch with their emotions?",
    option1: "Gemini",
    option2: "Aquarius",
    option3: "Aries",
    option4: "Cancer",
    answer: "Cancer",
  },
  {
    id: "q6",
    question: "If your birthday is January 1st, what is your Zodiac sign?",
    option1: "Virgo",
    option2: "Sagittarius",
    option3: "Aquarius",
    option4: "Capricorn",
    answer: "Capricorn",
  },
  {
    id: "q7",
    question: "What Zodiac's main traits are charming and witty?",
    option1: "Capricorn",
    option2: "Gemini",
    option3: "Scorpio",
    option4: "Pisces",
    answer: "Capricorn",
  },
  {
    id: "q8",
    question: "How many Zodiac signs are there?",
    option1: "6",
    option2: "12",
    option3: "10",
    option4: "14",
    answer: "12",
  },
  {
    id: "q9",
    question: "What time of the year does the Zodiac Scorpio occur?",
    option1: "Spring",
    option2: "Summer",
    option3: "Fall",
    option4: "Winter",
    answer: "Fall",
  },
  {
    id: "q10",
    question: "What sign starts the Zodiac cycle?",
    option1: "Aquarius",
    option2: "Aries",
    option3: "Gemini",
    option4: "Libra",
    answer: "Aries",
  },
  { 
    id: "q11",
    question: "What Zodiac's main traits are stable and fair?",
    option1: "Cancer",
    option2: "Pisces",
    option3: "Virgo",
    option4: "Libra",
    answer: "Libra",
  },
  {
    id: "q12",
    question: "What animal represents the Zodiac Pisces?",
    option1: "Fish",
    option2: "Lion",
    option3: "Bull",
    option4: "Ram",
    answer: "Fish",
  },
  {
    id: "q13",
    question: "If you were born on the March 1, what is your Zodiac sign?",
    option1: "Aries",
    option2: "Capricorn",
    option3: "Aquarius",
    option4: "Pisces",
    answer: "Pisces",
  },
  {
    id: "q14",
    question: "If you were born on September 1, what is your Zodiac sign?",
    option1: "Libra",
    option2: "Scorpio",
    option3: "Virgo",
    option4: "Leo",
    answer: "Virgo",
  },
  {
    id: "q15",
    question: "If you were born on December 1, what is your Zodiac sign?",
    option1: "Sagittarius",
    option2: "Scorpio",
    option3: "Capricorn",
    option4: "Aquarius",
    answer: "Sagittarius",
  },
  {
    id: "q16",
    question: "What are the main traits of Gemini?",
    option1: "artistic and stubborn",
    option2: "adaptable and impulsive",
    option3: "free-minded and easy-going",
    option4: "aggressive and strong",
    answer: "adaptable and impulsive",
  },
  

];


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

//STATE

const state = {
  counter: 0,
  correct: 0,
  total: 10,
}

//FUNCTIONS

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


function renderFrontPage() {
  // $("#game").addClass("hidden");
  let front = generateFrontPage();
  document.querySelector("main").innerHTML = front;
}
  
function generateQuestion(id, question, option1, option2, option3, option4) {
  
  return `<div class="box">
  
  <form>
  <fieldset id="${id}">
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
  </form>
  <button class="button submit">SUBMIT</button>
  </div> `
}


function renderQuestion() {
  let randomNum = getRandomIntInclusive(0, (questions.length - 1));

  let id = questions[randomNum].id;
  let question = questions[randomNum].question;
  let option1 = questions[randomNum].option1;
  let option2 = questions[randomNum].option2;
  let option3 = questions[randomNum].option3;
  let option4 = questions[randomNum].option4;
  let returnedQuestion = generateQuestion(id, question, option1, option2, option3, option4);
  document.querySelector("main").innerHTML = returnedQuestion;

} 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findId(questionId) {
  return questions.filter(questions => questions.id === questionId)
}

function findObj() {
  const getId = $("fieldset").attr("id");
  return findId(getId);
}

function getQuestionIndex() {
  const item = findObj();
  const getId = $("fieldset").attr("id");
  return questions.findIndex(item => item.id === getId);
}

function findSelectedAnswer() {
  const gettingAnswer = findObj();
  const answerToCheck = gettingAnswer[0].answer;
  return answerToCheck;
}


function generateCounter(counter, numberCorrect, total) {
  return `<div class="counter">
  <p>${counter + 1} out of ${total}</p>
  <p>${numberCorrect} correct</p>
</div>`
}

function generateCorrect() {
  return `<div class="box correct">
 <p><strong>Correct!</stonrg></p>
 <button class="next">NEXT</button>
</div>`
}

function renderCorrect() {
  $(".question").addClass("hidden");
  let correct = generateCorrect();
  document.querySelector("main").innerHTML = correct;
  state.correct++;
}

function generateIncorrect() {
  let answer = findSelectedAnswer();
 return `<div class="box incorrect ">
 <p>Sorry, not quite!</p>
 <br>
 <p>The answer was: <em>${answer}</em></p>
 <button class="next">NEXT</button>
</div>`
}

function renderIncorrect() {
  $(".question").addClass("hidden");
  let incorrect = generateIncorrect();
  document.querySelector("main").innerHTML = incorrect;
}

function generateEndPage(numberCorrect, total) {
  if (numberCorrect >= 8) {
    return `<div class="box endPage">
    <p>${numberCorrect} out of ${total}!</p>
    <p>Excellent job!</p>
    <br>
    <p>You really know your stuff!</p> 
  </div>`
  } else if (numberCorrect >= 5 && numberCorrect < 8) {
    return `<div class="endPage">
    <p>${numberCorrect} out of ${total}!</p>
    <p>Pretty good!</p>
    <br>
    <p>You definitely know some stuff!</p> 
  </div>`
  } else {
    return `<div class="endPage">
    <p>${numberCorrect} out of ${total}!</p>
    <p>Kind of okay!</p>
    <br>
    <p>Looks like you need to brush up!</p> 
  </div>`
  }
};

function endQuiz() {
  let endPage = generateEndPage(state.correct, state.total);
  $("fieldset").remove();
  $("button").remove();
  $("div.box").remove();
  $("main").append(endPage);
  $("#game").removeClass("hidden");
  let tryAgain = `<button id="again">AGAIN</button>`;
  $("main").append(tryAgain);
 
}

// HANDLERS

function startQuiz() {
  $(".start-button").on("click", function(event) {
    let splashScreen = document.querySelector(".zodiac-title");
    splashScreen.remove();
    renderQuestion();
    let counter = generateCounter(state.counter, state.correct, state.total);
    $("main").append(counter); 
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
    let answer = findSelectedAnswer();
    let checkedAnswer = $("input[name='options']:checked").val();
    const objToRemove = getQuestionIndex();
    
    if (answer === checkedAnswer) {
      renderCorrect();
    } else {
      renderIncorrect();;
    }
    
    questions.splice(objToRemove, 1);
    });
}

function nextQuestion() {
  $("body").on("click", ".next", function(event) {
    if ((state.counter + 1) === state.total) {
      endQuiz();
    } else {
  state.counter++;

  renderQuestion();
  let counter = generateCounter(state.counter, state.correct, state.total);
  $("main").append(counter); 
    }
  });
}

function tryAgain() {
  $("body").on("click", "button#again", function(event) {
    state.counter = 0;
    state.correct = 0;

    location.reload();

   
  }) 
  
}

function implementQuiz() {
renderFrontPage();
startQuiz();
submitAnswer();
nextQuestion();
animateLetters();
tryAgain();
}

$(implementQuiz);

