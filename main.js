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
];

console.log(questionList[0].answers[3].correct);

function loadQuestion(i) {
  return questionList[i];
}

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

displayQuestion(2);

function validateAnswer() {
  let correct = questionList[0].answers[2].correct;
  if ((correct = false)) {
    return false;
  }
  if ((correct = true)) {
    return true;
  }
  return correct;
}

validateAnswer(0);
console.log(correct + "if it is correct");

function revealAnswer() {}

function nextQuestion() {}

// console.log(questionList[questionIndex].answers[1].content);
