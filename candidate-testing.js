const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
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
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//  candidateAnswer = input.question(question);

// TODO 2.2 Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.
  for (q in questions) {
    candidateAnswer = input.question(questions[q]);
    candidateAnswers.push(candidateAnswer);
  }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   if (candidateAnswer === correctAnswer) {
//     console.log("\n" + 
//     "You're right. Sally Ride was the first!");
//   } else {
//     console.log("\n" + 
// "Sorry, you got it wrong. Sally Ride was the first.");
//   }

// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers

  yourAns = `You responded: `;
  for (let i=0; i < 4; i++) {
    yourAns += `"${candidateAnswers[i]}," `;
  }
  yourAns += `and "${candidateAnswers[4]}."`;
  correctAns = `The correct answers are: `;
  for (let i=0; i < 4; i++) {
    correctAns += `"${correctAnswers[i]}," `;
  }
  correctAns += `and "${correctAnswers[4]}."`;
  console.log(yourAns, correctAns);
  
  let grade = 0;
  for (i in candidateAnswers) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      grade += 1;
    } 
  }
  
  return (100 * grade / 5) ;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + "!" + "\n")
  askQuestion();
  candidateGrade = gradeQuiz(this.candidateAnswers);

  console.log(`Candidate Name: ${candidateName}`);
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