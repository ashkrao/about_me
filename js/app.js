'use strict';
var userScore = 0;



var questions = ['Is Ashwini a good developer?', 'Can Ashwini write clean code?',
  'Does Ashwini like sports?', 'Does Ashwini like chocolate?',
  'Is Ashwini going to Ace code201? (You better say yes)'
];

var answers = ['Y, YES', 'Y, YES', 'N, NO', 'Y, YES', 'Y, YES'];

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! Nice to meet you!');

// var answer = prompt(q1, 'type yes or no').toUpperCase();
// console.log('Prompted: ' + q1);
// console.log('Got this answer: ' + answer);
function quest15(input) {
  var answer = prompt(questions[input]).toUpperCase();
  if (answer === answers[input][0] ||answer === answers[input][1]) {
    alert('You betcha!');
    console.log('Correct answer!');
  } else {
    alert('Wrong! go to the next question');
    console.log('Wrong answer!');
  }
}
//
// // answer = prompt(q2, 'type yes or no').toLowerCase();
// // console.log('Prompted: ' + q2);
// // console.log('Got this answer: ' + answer);
// //
// // if (answer === 'yes' || answer === 'y') {
// //   userScore++;
// //   alert('She sure can!');
// //   console.log('Correct answer!');
// // } else {
// //   alert('Wrong! You need to see her code to believe it!');
// //   console.log('Wrong answer!');
// // }
// //
// // answer = prompt(q3, 'type yes or no').toLowerCase();
// // console.log('Prompted: ' + q3);
// // console.log('Got this answer: ' + answer);
// //
// // if (answer === 'no' || answer === 'n') {
// //   userScore++;
// //   alert('You got that right!');
// //   console.log('Correct answer!');
// // } else {
// //   alert('Wrong! try again');
// //   console.log('Wrong answer!');
// // }
// //
// // answer = prompt(q4, 'type yes or no').toLowerCase();
// // console.log('Prompted: ' + q4);
// // console.log('Got this answer: ' + answer);
// //
// // if (answer === 'yes' || answer === 'y') {
// //   userScore++;
// //   alert('You got that right!');
// //   console.log('Correct answer!');
// // } else {
// //   alert('Wrong!');
// //   console.log('Wrong answer!');
// // }
// //
// // answer = prompt(q5, 'type yes or no').toLowerCase();
// // console.log('Prompted: ' + q5);
// // console.log('Got this answer: ' + answer);
// //
// // if (answer === 'yes' || answer === 'y') {
// //   userScore++;
// //   alert('You got that right!');
// //   console.log('Correct answer!');
// // } else {
// //   alert('You are doomed!');
// //   console.log('Wrong answer!');
// // }
//
//
//
//
//
//
//
//
//
function numberGuess() {
var guesses = 4;
var favNumber = 81;
while (guesses > 0) {
  answer = prompt(q6 + ' You have ' + guesses + ' guesses.', 'enter a number');
  console.log('Prompted: ' + q6);
  console.log('Got this answer: ' + answer);
  if (answer == favNumber) {
    alert('Bingo!');
    console.log('Correct answer!');
    userScore++;
    break;
  } else {
    guesses--;
    if (answer > favNumber) {
      alert('That\'s too high!');
      console.log('Wrong answer!');
    } else {
      alert('That\'s too low!');
      console.log('Wrong answer!');
    }
  }
}
// };

//
// // function movieQuest() {
// // var numMovies = prompt('Guess Ashwini\'s favorite snacks?');
// var snacks = ['popcorn', 'chips', 'cookies', 'muffins'];
// var tries = 6;
// while (tries > 0) {
//   var snacksYum = prompt('Guess Ashwini\'s favorite snacks?');
//
//   for (var i = 0; i < snacks.length; i++) {
//     console.log(snacks[i]);
//
//
//   }
//   if (snacksYum === snacks[0]) {
//     userScore++;
//     alert('Hurray you got it right!');
//   } else {
//     tries--;
//     alert('Wrong answer! You have ' + tries + 'tries');
//
//   }
//
// }
// // }
//
//
// alert('Your total scoresdfsdf is : ' + userScore + ' out of 6, ' + user + '!');
//
//
// numberGuess();
function guessGame() {
  for (var i = 0; i < 5; i++) {
    quest15(i);
  }
}

guessGame();
