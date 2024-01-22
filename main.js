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
      '4 How can you select an element with the ID "myElement" in JavaScript?',
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
  (questionFive = {
    question:
      "5 What method is used to retrieve the text content of an element in the DOM?",
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
  (questionSix = {
    question:
      '6 How do you attach a click event listener to an element with the ID "button"?',
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
