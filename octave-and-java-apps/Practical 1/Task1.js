const questions = [
  { question: "5 + 3", answer: 8 },
  { question: "10 - 4", answer: 6 },
  { question: "7 * 2", answer: 14 },
  { question: "12 / 3", answer: 4 },
  { question: "9 + 6", answer: 15 },
  { question: "8 - 5", answer: 3 },
  { question: "6 * 4", answer: 24 },
  { question: "15 / 3", answer: 5 },
  { question: "3 + 9", answer: 12 },
  { question: "16 - 7", answer: 9 }
];

let correctAnswers = 0;
for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(`Question ${i + 1}: What is ${questions[i].question}?`);
  
  if (parseInt(userAnswer) === questions[i].answer) {
    correctAnswers++;
  }
}
let score = Math.floor(correctAnswers / 2);

alert(`You answered ${correctAnswers} questions correctly.\nYour score is: ${score}`);