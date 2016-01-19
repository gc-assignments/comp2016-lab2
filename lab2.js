var userChoice = prompt('Question');
var computerChoice = Math.random();

computerChoice = computerChoice < .33 ? 'rock' :
    computerChoice < .66 ? 'paper' : 'scissors';

console.log(computerChoice);
