import "./tri-quiz.css";

const quizForm = document.querySelector(".form-quiz");
const submitBtn = document.querySelector("#submit-btn");
const result = document.querySelector("#output");

const answerArray = ["Pythagoras", "Trignometry", "True", "Acute", "180°"];

submitBtn.addEventListener("click", checkAnswers);

function checkAnswers() {
  let index = 0;
  let score = 0;
  const formResults = new FormData(quizForm);

  for (let values of formResults.values()) {
    if (values === answerArray[index]) {
      score += 1;
    }
    index += 1;
  }
  result.innerText = "You scored a total of " + score;
}
