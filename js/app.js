'use strict';
var userScore = 0;

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! Nice to meet you!');

var q1 = 'Does Ashwini like pineapple?';
var q2 = 'Is Ashwini\'s favorite color purple?';
var q3 = 'Does Ashwini like sports?';
var q4 = 'Does Ashwini like chocolate?';
var q5 = 'Is Ashwini going to Ace code201? (You better say yes)';


var answer = prompt(q1, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q1);
console.log('Got this answer: ' + answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You got that right!');
  console.log('Correct answer!');
} else {
  alert('Wrong! go to the next question');
}

answer = prompt(q2, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q2);
console.log('Got this answer: ' + answer);

if (answer === 'no' || answer === 'n') {
  userScore++;
  alert('You got that right!');
  console.log('Correct answer!');
} else {
  alert('Wrong!');
  console.log('Wrong answer!');
}

answer = prompt(q3, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q3);
console.log('Got this answer: ' + answer);

if (answer === 'no' || answer === 'n') {
  userScore++;
  alert('You got that right!');
  console.log('Correct answer!');
} else {
  alert('Wrong! try again');
  console.log('Wrong answer!');
}

answer = prompt(q4, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q4);
console.log('Got this answer: ' + answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You got that right!');
  console.log('Correct answer!');
} else {
  alert('Wrong!');
  console.log('Wrong answer!');
}

answer = prompt(q5, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q5);
console.log('Got this answer: ' + answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You got that right!');
  console.log('Correct answer!');
} else {
  alert('You are doomed!');
  console.log('Wrong answer!');
}
alert('Your total score is : ' + userScore);
