'use strict';
var userScore = 0;

console.log('Ready to have some fun!');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! Nice to meet you!');

var answer1 = prompt('Does Ashwini like pineapple?', 'type yes or no').toLowerCase();
console.log(answer1);

if (answer1 === 'yes' || answer1 === 'y') {
  userScore++;
  alert('You got that right!')
} else {
  alert('Wrong! go to the next question');
}
