// Interactive quiz
// https://thejsway.net/chapter16/#interactive-quiz

// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4",
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492",
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter",
  },
  {
    statement: "What is the capital of France?",
    answer: "Paris",
  },
  {
    statement: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    statement: "I speak without a mouth and hear without ears. What am I?",
    answer: "An echo",
  },
  {
    statement: "What is 10 × 10?",
    answer: "100",
  },
  {
    statement: "Who wrote 'Hamlet'?",
    answer: "William Shakespeare",
  },
  {
    statement: "What has to be broken before you can use it?",
    answer: "An egg",
  },
  {
    statement: "What is the chemical symbol for water?",
    answer: "H₂O",
  },
];

const quizesNumber = questions.length;
const nonAskedQuizNumbers = new Set([...Array(quizesNumber).keys()]);
console.log(nonAskedQuizNumbers);
let askedQuizNumbers = 0;

const generateQuiz = (targetElement, number) => {
  const { statement, answer } = questions[number];

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <p><b>Question ${number}:</b> <i>${statement}</i></p>
    <p><button class="show-answer">Show answer</button></p>
  `;

  wrapper.querySelector(".show-answer").addEventListener("click", (e) => {
    e.target.replaceWith(document.createTextNode(answer));
  });

  targetElement.append(wrapper);
};

const setQuizManageButton = (button) => {
  button.addEventListener("click", (e) => {
    if (nonAskedQuizNumbers.size == 0) {
      alert("You've passed the whole Quiz!");
      return;
    }

    const quizArray = Array.from(nonAskedQuizNumbers);
    const nextQuizNumber =
      quizArray[Math.floor(Math.random() * quizArray.length)];

    generateQuiz(targetElement, nextQuizNumber);
    nonAskedQuizNumbers.delete(nextQuizNumber);
    if (++askedQuizNumbers > 0) {
      button.textContent = "Proceed quiz";
    }
  });
};

const targetElement = document.getElementById("content");
setQuizManageButton(document.getElementById("manageQuiz"));
