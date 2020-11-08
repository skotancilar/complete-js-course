'use strict';

///DOMS
const domBody = document.getElementsByTagName('body');
const domAgain = document.querySelector('.again');
const domNumber = document.querySelector('.number');
const domGuess = document.querySelector('.guess');
const domCheck = document.querySelector('.check');
const domMessage = document.querySelector('.message');
const domScore = document.querySelector('.score');
const domHighScore = document.querySelector('.highscore');

let randomNumber;
let score = 20;
//EVENT LISTENERS
domCheck.addEventListener('click', checkNumber);
domAgain.addEventListener('click', playAgain)

function fnrandomNumber() {
   return randomNumber = Math.trunc(Math.random() * 20 + 1);
}

fnrandomNumber();
//console.log(randomNumber);

//CHECK NUMBER
function checkNumber() {
   const guess = Number(document.querySelector('.guess').value);
   //console.log(guess);
   if (randomNumber !== guess) {
      if (guess === 0) {
         domScore.textContent = score
         domMessage.textContent = '⛔ No Number!';
      } else if (randomNumber < guess) {
         domScore.textContent = --score;
         domMessage.textContent = '🔼 Too High!';
      } else if (randomNumber > guess) {
         domScore.textContent = --score;
         domMessage.textContent = '🔽 Too Low!';
      }
   } else {
      domMessage.textContent = '🎉 Correct Number!';
      document.body.style.backgroundColor = "#60b347";
      domHighScore.textContent = score;
      domHighScore.value = score;
      domNumber.textContent = randomNumber;
      score > domHighScore.value ? domHighScore.textContent = score : console.log('hata');
   }
   return score;
}

//PLAY AGAIN
function playAgain() {
   const guess = Number(document.querySelector('.guess').value);
   if (randomNumber === guess) {
      fnrandomNumber();
      //console.log(randomNumber);
      document.body.style.backgroundColor = "#222"
      domGuess.textContent = '';
      domMessage.textContent = 'Start guessing...';
      domScore.textContent = 20;
      score = 20;
      domNumber.textContent = '?';
   }
};






