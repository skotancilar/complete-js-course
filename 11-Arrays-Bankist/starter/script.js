'use strict';
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for (const movement of movements) {
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

console.log('---- FOREACH ----');

movements.forEach(foo);

function foo(mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, xxx, map) {
  console.log(`${map}: ${value}`);
});


currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
 */

/* const juliasList = [9, 16, 6, 8, 3];
const katesList = [10, 5, 6, 1, 4];


const checkDogs = function (juliasList, katesList) {
  var juliasCorectedList = juliasList.splice(1, 2);

  const fullList = juliasCorectedList.concat(katesList)

  fullList.forEach(function (value, key) {
    const str = `"Dog number ${key + 1} is ${value >= 3 ? `an adult, and is ${value} years old` : 'still puppy 🐶'}`
    console.log(str);
  });
}

checkDogs(juliasList, katesList); */

/* //MAP METHOD
let arr = [4, 2, 7, 3, 1, 6, 8, 9];
const newArr1 = arr.map(function (value) {
  return value * 2;
});

console.log(...newArr1);

const newArr2 = arr.map(function (value) {
  return value > 5;
});

console.log(...newArr2);

const newArr3 = arr.map(value => value * 3);
console.log(...newArr3);

const newArr4 = arr.map((value, key, arr) => {
  console.log(...arr);
  `Movement ${key + 1}:  You deposited ${value}`

  if (value > 5) {
    console.log(`Movement ${key + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${key + 1}: You withdrew ${Math.abs(value)}`);
  }
}); */

/* /////////////// CODING CHALANGE 2 ////////////////
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(dogAges) {
  let humanAges = dogAges.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else if (dogAge > 2) {
      return 16 + dogAge * 4
    }
  })
  let aduts = humanAges.filter(humanAge => humanAge >= 18
  )

  let average = aduts.reduce((acc, cur) => acc + cur, 0) / aduts.length;
  return average;
}

const avg1 = calcAverageHumanAge(ages1);
const avg2 = calcAverageHumanAge(ages2);

console.log(avg1, avg2); */

/* /////////////// CODING CHALANGE 3 ////////////////
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(dogAges) {
  let average = dogAges.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else if (dogAge > 2) { return 16 + dogAge * 4 }
  })
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return average;
}

const avg1 = calcAverageHumanAge(ages1);
const avg2 = calcAverageHumanAge(ages2);

console.log(avg1, avg2);*/
/* let x = Array.from({ length: 100 }, (cur) => cur = Math.trunc(Math.random() * 100))

let y = x.filter((value1, _, arr) => value1 === arr.find(value => value1 === value))


console.log(...y);  */


/////////////// CODING CHALANGE 4 ////////////////

/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];


//1
const recommendedFood = dogs.map(cur => cur.recommendedFood = Number((cur.weight ** 0.75 * 28).toFixed(0)));

const recFoodTopMargin = dogs.map(cur => cur.recFoodTopMargin = Number((cur.recommendedFood + cur.recommendedFood * 0.1).toFixed(0)));
const recFoodBotMargin = dogs.map(cur => cur.recFoodBotMargin = Number((cur.recommendedFood - cur.recommendedFood * 0.1).toFixed(0)));

const isEatingOkay = dogs.map(cur => cur.isEatingOkay = (cur.curFood >= cur.recFoodBotMargin && cur.curFood <= cur.recFoodTopMargin))


console.log(recommendedFood);

//2
const dogsOwners = dogs.map(cur => cur.owners = cur.owners.join(','));

console.log(dogsOwners);

function isEatingOkayFn(cur) {
  if (cur.isEatingOkay) {
    console.log(`Sarah's dog eats health`);
  } else if (cur.curFood >= cur.recFoodBotMargin) {
    console.log(`Sarah's dog eats too much. Recommended food amounth is ${cur.recommendedFood} gr. It needs to eat ${Math.abs(cur.recommendedFood - cur.recFoodTopMargin)} less.`);
  } else if (cur.curFood <= cur.recFoodBotMargin) {
    console.log(`Sarah's dog eats too little. Recommended food amounth is ${cur.recommendedFood} gr. It needs to eat ${Math.abs(cur.recommendedFood - cur.recFoodBotMargin)} more.`);
  }
}

for (const cur of dogs) {
  if (cur.owners.includes('Sarah')) {
    isEatingOkayFn(cur);
  }
}



//3
console.log(dogs[0].owners);
console.log(dogsOwners);

const ownersEatTooMuch = dogs.filter((cur) => cur.curFood > cur.recFoodTopMargin).map((cur) => cur.owners);
const ownersEatTooLittle = dogs.filter(cur => cur.curFood < cur.recFoodBotMargin).map((cur) => cur.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

const strMuch = ownersEatTooMuch.reverse().join(' and ')
const strLittle = ownersEatTooLittle.join(' and ')

console.log(`${strMuch}'s dogs eat too much.`);
console.log(`${strLittle}'s dogs eat too little.`);

//5
console.log(dogs.some(cur => cur.curFood === cur.recommendedFood));
//6
console.log(dogs.some(cur => cur.isEatingOkay === true));
//7
console.log(dogs.filter(cur => cur.isEatingOkay)); */




