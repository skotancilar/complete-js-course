'use strict';
//DOM AREA
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// The Callback Function
function camelCase() {
  const rawStr = document.getElementsByTagName('textarea')[0].value
  const arrified = rawStr.split('\n');
  console.log(arrified);
  for (const n of arrified) {
    //Normalize strings
    const x = n.toLowerCase().trim();

    //Divide the words for two parts
    const [firstPart, secondPart] = x.split('_');

    //Capitilize First Letter of Second Word
    const secondPartV2 = secondPart[0].toUpperCase() + secondPart.slice(1, secondPart.length);

    //Combine and get camelCase word
    const checkPoint = (firstPart + secondPartV2).replace('_', '');

    //Add emojis as per instructions
    const result = checkPoint.padEnd('20', ' ') + '✅'.repeat(arrified.indexOf(n) + 1);
    console.log(result);
  }
}

// CONVERTER BUTTON
document.getElementsByTagName('button')[0].addEventListener('click', camelCase);

// RESULT
// underscoreCase    ✅
// firstName         ✅✅
// someVariable      ✅✅✅
// calculateAge      ✅✅✅✅
// delayedDeparture  ✅✅✅✅✅


/* /////////////////////// CODING CHALANGE 3///////////////////
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

//1
const events = new Set(gameEvents.values());
console.log(...events);

//2
gameEvents.delete(64);
//console.log(...gameEvents);

//3
const time = [...gameEvents.keys()].pop();
const x = Math.trunc(time / gameEvents.size)
const str = `An event happened, on an average, every ${x} minutes"`
console.log(str)

//4
for (const [key, value] of gameEvents) {
  const str = `[${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`
  console.log(str);
} */

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}; */

/////////////////// CODING CHALANGE ///////////////////

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1

for (const [i, el] of game.scored.entries()) {
  const str = `Goal ${i}: ${el}`;
  console.log(str);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
  average += odd;
average /= odds.length;
console.log(average);

// 3


for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
} */

/* // 1
const [players1, players2] = [game.players[0], game.players[1]]

console.log(...players1);
console.log(...players2);

// 2
const [gk1, ...fieldPlayers1] = [...players1];

console.log(gk1);
console.log(...fieldPlayers1);

// 3
const allPlayers = [...players1, ...players2];

console.log(...allPlayers);

// 4
const subPlayers1 = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...subPlayers1];

console.log(...subPlayers1);

// 5
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
const garr = ['Davies', 'Muller', 'Lewandowski', 'Kimmich']

function printGoals(...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
}

printGoals(...garr);
printGoals(...game.scored)

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win'); */






// const arrOdds = Object.values(game.odds)

/* function averageOdd() {
  let sum = 0;
  for (const [i] of game.odds.values()) {
    sum += i;
  }
  return average = Number((sum / game.odds.values().length).toFixed(2));
}

const avOdds = averageOdd()
console.log(avOdds); */
