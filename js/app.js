'use strict';
var userScore = 0;

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! Nice to meet you!');

var answer = prompt('Does Ashwini like pineapple?', 'type yes or no').toLowerCase();
console.log(answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You got that right!')
} else {
  alert('Wrong! go to the next question');
}

answer = prompt('Is Ashwini\'s favorite color purple?', 'type yes or no').toLowerCase();
console.log(answer);
if (answer === 'no' || answer === 'n') {
  userScore++;
  alert('You got that right!')
} else {
  alert('Wrong!');
}
answer = prompt('Does Ashwini like chocolate?', 'type yes or no').toLowerCase();
console.log(answer);
if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You got that right!')
} else {
  alert('Wrong!');
}
