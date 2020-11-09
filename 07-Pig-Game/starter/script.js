'use strict';
// DOMS
const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.querySelector('#score--1')
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player1El = document.querySelector('.player--0')
const player2El = document.querySelector('.player--1')

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dicePic = document.querySelector('.dice');

let currentScore, dice, scores, activePlayer, playing, winningScore;
////////////////////////////////////////////////
winningScore = 100;
////////////////////////////////////////////////

function init() {
   currentScore = 0;
   scores = [0, 0]
   currentScore0.textContent = 0;
   currentScore1.textContent = 0;
   totalScore0.textContent = 0;
   totalScore1.textContent = 0;
   activePlayer = 0;
   playing = true;

   dicePic.classList.add('hidden');
   player1El.classList.remove('player--active');
   player1El.classList.add('player--active');
   player2El.classList.remove('player--active');
   player1El.classList.remove('player--winner');
   player2El.classList.remove('player--winner');
   document.querySelector('#name--0').textContent = 'PLAYER 1';
   document.querySelector('#name--1').textContent = 'PLAYER 2';
}

function switchPlayer() {
   player1El.classList.toggle('player--active');
   player2El.classList.toggle('player--active');
   dicePic.classList.add('hidden');

   currentScore = 0;
   currentScore0.textContent = 0;
   currentScore1.textContent = 0;
   activePlayer++;
   return activePlayer;
}

function rollDice() {
   if (playing) {
      dice = Math.trunc(Math.random() * 6) + 1;

      dicePic.setAttribute('src', 'dice-' + dice + '.png');
      dicePic.classList.remove('hidden');

      if (dice !== 1) {
         currentScore += dice;
         document.getElementById(
            `current--${activePlayer % 2}`
         ).textContent = currentScore;
      } else {
         switchPlayer();
      }
   }
}

function winner() {
   document.querySelector(`.player--${activePlayer % 2}`).classList.add('player--winner');
   document.querySelector(`#current--${activePlayer % 2}`).textContent = 0;
   document.querySelector(`#name--${activePlayer % 2}`).textContent = 'WINNER';
   dicePic.classList.add('hidden');

   playing = false;
}

function holdPoints() {
   if (playing && currentScore > 0) {
      if (activePlayer % 2 === 0) {
         scores[0] += currentScore;
         totalScore0.textContent = scores[0];
         if (scores[0] >= winningScore) {
            winner();
         } else {
            switchPlayer();
         }
      } else {
         scores[1] += currentScore;
         totalScore1.textContent = scores[1];
         if (scores[1] >= winningScore) {
            winner();
         } else {
            switchPlayer();
         }
      }
   }
}

init();

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', holdPoints);

btnNew.addEventListener('click', init)