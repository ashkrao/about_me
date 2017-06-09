'use strict';
var userScore = 0;

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! Nice to meet you!');

var q1 = 'Is Ashwini a good developer?';
var q2 = 'Can Ashwini write clean code?';
var q3 = 'Does Ashwini like sports?';
var q4 = 'Does Ashwini like chocolate?';
var q5 = 'Is Ashwini going to Ace code201? (You better say yes)';
var q6 = 'What is my favorite number?';
var q7 = 'What is Ashwini\'s favorite snack?';

var answer = prompt(q1, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q1);
console.log('Got this answer: ' + answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('You betcha!');
  console.log('Correct answer!');
} else {
  alert('Wrong! go to the next question');
  console.log('Wrong answer!');
}

answer = prompt(q2, 'type yes or no').toLowerCase();
console.log('Prompted: ' + q2);
console.log('Got this answer: ' + answer);

if (answer === 'yes' || answer === 'y') {
  userScore++;
  alert('She sure can!');
  console.log('Correct answer!');
} else {
  alert('Wrong! You need to see her code to believe it!');
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

var guesses = 4;
var favNumber = 81;
while(guesses > 0) {
  answer = prompt(q6 + ' You have ' + guesses + ' guesses.', 'enter a number');
  console.log('Prompted: ' + q6);
  console.log('Got this answer: ' + answer);
  if(answer == favNumber) {
    alert('Bingo!');
    console.log('Correct answer!');
    userScore++;
    break;
  } else {
    guesses--;
    if(answer > favNumber) {
      alert('That\'s too high!');
      console.log('Wrong answer!');
    } else {
      alert('That\'s too low!');
      console.log('Wrong answer!');
    }
  }
}

guesses = 6;
var snacks = ['popcorn','muffin','chips','roasted almonds','cookies'];
var message = '';
while(guesses > 0){
  answer = prompt(q7 + ' You have ' + guesses + ' guesses.').toLowerCase();
  console.log(q7);
  console.log(answer);
  var answerFound = false; // Extra variable to break out of while loop later
  for(var i = 0;i < snacks.length;i++){
    if(answer == snacks[i].toLowerCase()){
      answerFound = true;
      message = 'Yay, you guessed right! ';
      console.log('Correct answer! ' + answer + ' matched ' + snacks[i]);
      userScore++;
      break;
    }
  }

  // Now check if we need to break out of while loop too
  if(answerFound) {
    break;
  } else {
    // No need to break out of while loop yet
    guesses--;
    console.log('Wrong answer!');
  }
}

message = message + 'These are Ashwini\'s favorite snacks: ';
for(i = 0;i < snacks.length;i++) {
  message = message + '\n\n' + snacks[i];
}

alert(message);

alert('Your total score is : ' + userScore + ' out of 7, ' + user + '!');
