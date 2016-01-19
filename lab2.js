var userChoice = prompt('Question');
var computerChoice = Math.random();

computerChoice = computerChoice < .33 ? 'rock' :
    computerChoice < .66 ? 'paper' : 'scissors';

console.log(computerChoice);

function compare(choice1, choice2) {
  var choices = {'rock':1, 'paper':1, 'scissors':1};
  var userChoice = choice1.trim().toLowerCase();
  if (!(userChoice in choices))
    return "You did not enter rock, paper, or scissors.";
  if (choice1 == choice2)
    return "The result is a tie!";
  if (choice1 == 'rock')
    return choice2 == 'scissors' ? 'rock wins' : 'paper wins';
  if (choice1 == 'paper')
    return choice2 == 'scissors' ? 'scissors wins' : 'paper wins';
  if (choice1 == 'scissors')
    return choice2 == 'rock' ? 'rock wins' : 'scissors wins';
}

var result = compare(userChoice, computerChoice);
console.log(result);
