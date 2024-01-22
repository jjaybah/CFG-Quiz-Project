const questionList = [
  (questionOne = {
    question:
      'How can you select an element with the ID "myElement" in JavaScript?',
    answers: [
      (a = {
        content: "getElement('myElement')",
        correct: false,
      }),
      (b = {
        content: "document.getElementByName('myElement')",
        correct: false,
      }),
      (c = {
        content: "document.getElementById('myElement')",
        correct: true,
      }),
      (d = {
        content: "selectElement('myElement')",
        correct: false,
      }),
    ],
  }),
  (questionTwo = {
    question:
      "What method is used to retrieve the text content of an element in the DOM?",
    answers: [
      (a = {
        content: "element.textContent",
        correct: true,
      }),
      (b = {
        content: "element.innerText",
        correct: false,
      }),
      (c = {
        content: "element.text",
        correct: false,
      }),
      (d = {
        content: "element.innerHTML",
        correct: false,
      }),
    ],
  }),
  (questionThree = {
    question:
      'How do you attach a click event listener to an element with the ID "button"?',
    answers: [
      (a = {
        content: "button.addEventListener('click', myFunction)",
        correct: true,
      }),
      (b = {
        content: "button.attachEvent('onclick', myFunction)",
        correct: false,
      }),
      (c = {
        content: "button.on('click', myFunction)",
        correct: false,
      }),
      (d = {
        content: "button.click(myFunction)",
        correct: false,
      }),
    ],
  }),
  (questionFour = {
    question:
      "Which method is used to create a new HTML element in JavaScript?",
    answers: [
      (a = {
        content: "document.newElement('div')",
        correct: false,
      }),
      (b = {
        content: "document.create('div')",
        correct: false,
      }),
      (c = {
        content: "document.createElement('div')",
        correct: true,
      }),
      (d = {
        content: "document.add('div')",
        correct: false,
      }),
    ],
  }),
  (questionFive = {
    question:
      'How can you change the background colour of an element with the class "box" using JavaScript?',
    answers: [
      (a = {
        content: "document.getElement('.box').style.backgroundColor = 'red'",
        correct: false,
      }),
      (b = {
        content:
          "elemedocument.getElementByClassName('box').style.background = 'red'nt.innerText",
        correct: true,
      }),
      (c = {
        content: "document.getStyle('.box').background = 'red'",
        correct: false,
      }),
      (d = {
        content: "document.querySelector('.box').changeBackground('red')",
        correct: false,
      }),
    ],
  }),
  (questionSix = {
    question:
      'What method is used to select all elements with the tag name "p" in JavaScript?',
    answers: [
      (a = {
        content: "document.getElementsByTag('p')",
        correct: false,
      }),
      (b = {
        content: "document.find('p')",
        correct: false,
      }),
      (c = {
        content: "document.select('p')",
        correct: false,
      }),
      (d = {
        content: "document.getElementsByTagName('p')",
        correct: true,
      }),
    ],
  }),
  (questionSeven = {
    question:
      'How can you execute a function called "myFunction" every 2 seconds in JavaScript?',
    answers: [
      (a = {
        content: "setInterval(myFunction, 2000)",
        correct: false,
      }),
      (b = {
        content: "setTimeout(myFunction, 2000)",
        correct: true,
      }),
      (c = {
        content: "repeatEvery(2000, myFunction)",
        correct: false,
      }),
      (d = {
        content: "executeEvery(2000, myFunction)",
        correct: false,
      }),
    ],
  }),
  (questionEight = {
    question:
      'What method is used to select all elements with the class "nested" inside an element with the ID "parent"?',
    answers: [
      (a = {
        content: "document.getElements('.nested', '#parent')",
        correct: false,
      }),
      (b = {
        content:
          "document.getElementById('parent').getElementsByClassName('nested')",
        correct: true,
      }),
      (c = {
        content: "document.select('.nested', '#parent')",
        correct: false,
      }),
      (d = {
        content: "document.getElementById('parent').find('.nested')",
        correct: false,
      }),
    ],
  }),
  (questionNine = {
    question:
      'How can you add a CSS class "highlight" to an element with the ID "myElement" using JavaScript?',
    answers: [
      (a = {
        content: "document.getElementById('myElement').addClass('highlight')",
        correct: false,
      }),
      (b = {
        content:
          "document.querySelector('#myElement').classList.add('highlight')",
        correct: true,
      }),
      (c = {
        content: "document.setStyle('#myElement', 'highlight')",
        correct: false,
      }),
      (d = {
        content: "document.querySelector('#myElement').style.add('highlight')",
        correct: false,
      }),
    ],
  }),
  (questionTen = {
    question:
      'What method is used to remove an HTML element with the ID "toBeRemoved" from the DOM?',
    answers: [
      (a = {
        content: "document.removeElement('#toBeRemoved')",
        correct: false,
      }),
      (b = {
        content: "document.querySelector('#toBeRemoved').delete()",
        correct: false,
      }),
      (c = {
        content: "document.delete('#toBeRemoved')",
        correct: false,
      }),
      (d = {
        content: "document.getElementById('toBeRemoved').remove()",
        correct: true,
      }),
    ],
  }),
];

let currentQuestion = 0;
let hasUserAnswered = false;
let userScore = 0;

function displayQuestion(questionIndex) {
  document.getElementById("question").innerText =
    questionList[questionIndex].question;
  document.getElementById("answer1").innerText =
    questionList[questionIndex].answers[0].content;
  document.getElementById("answer2").innerText =
    questionList[questionIndex].answers[1].content;
  document.getElementById("answer3").innerText =
    questionList[questionIndex].answers[2].content;
  document.getElementById("answer4").innerText =
    questionList[questionIndex].answers[3].content;
}

function validateAnswer(userAnswer, button) {
  let isCorrect = questionList[currentQuestion].answers[userAnswer].correct;
  hasUserAnswered = true;
  toggleNextButton();
  console.log(isCorrect);
  if (isCorrect) {
    userScore += 1; // increment every time correct
    updateScore(); // call this every time we need to refresh the display
    changeButtonColour(button, "#52B3D9");
  }
  if (isCorrect == false) {
    changeButtonColour(button, "#F23535");
  }
}

function toggleNextButton() {
  if (nextBtn.disabled) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

function changeButtonColour(element, colour) {
  element.style.background = colour;
}

function updateScore() {
  scoreboardElement.innerText = userScore;
}

function nextQuestion() {
  if (currentQuestion < questionList.length - 1) {
    if (hasUserAnswered) {
      displayQuestion((currentQuestion += 1));
      hasUserAnswered = false;
      resetButtonsStyle();
      toggleNextButton();
    }
  } else {
    // load finish page here
    console.log("the end");
  }
}

function resetButtonsStyle() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style.background = "#FFFFFF";
  }
}

// App Running

displayQuestion(currentQuestion);

// Load next question when Next button is clicked
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextQuestion);

const answerButtons = document.getElementsByClassName("answerBtn");

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function (e) {
    if (hasUserAnswered == false) {
      validateAnswer(i, answerButtons[i]);
    }
  });
}

const scoreboardElement = document.getElementById("score");
updateScore(userScore);
