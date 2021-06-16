const input = require('readline-sync');


let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  for (let q = 0; q < questions.length; q++) {
    candidateAnswer = input.question(`${q+1}) ${questions[q]}`);
    console.log(`Your Answer: ${candidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswers[q]}\n`)
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  for (let a = 0; a < candidateAnswers.length; a++) {
    if (candidateAnswers[a].toLowerCase() === correctAnswers[a].toLowerCase()) {
      grade += 1;
    } 
  }
  
  return (100 * grade / 5) ;
}

function buildReport() {
  console.log(`>>> Overall Grade: ${candidateGrade}% <<< `);
  let outcome = '';
  if (candidateGrade >= 80) {
    outcome = 'PASSED';
  } else { outcome = 'FAILED'; }

  console.log(`>>> Status: ${outcome} <<<`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nCandidate Name: " + candidateName)
  askQuestion();
  candidateGrade = gradeQuiz(this.candidateAnswers);
  buildReport();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};