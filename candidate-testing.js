const input = require('readline-sync');


let candidateName;
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer;
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
  for (q in questions) {
    candidateAnswer = input.question(questions[q]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  for (i in candidateAnswers) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade += 1;
    } 
  }
  
  return (100 * grade / 5) ;
}

function buildReport() {
  let dashedLine = '-'.repeat(15);
  console.log('\n' + dashedLine + '\n');
  console.log(`Candidate Name: ${candidateName}`);
  console.log('\n' + dashedLine + '\n');
  
  for (i in questions) {
    console.log(`${Number(i)+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  console.log(`-- Your Grade: ${candidateGrade}% -- `);
  if (candidateGrade >= 80) {
    console.log('-- Status: Passed -- ');
  } else {
    console.log('-- Status: Failed -- ');
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + "!" + "\n")
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