'use strict';
/////////////// CODING CHALANGE 1////////////////
/*
const calcAverage = (g1, g2, g3) => (g1 + g2 + g3) / 3;


const averageKoalas = calcAverage(44, 23, 71);
const averageDolphins = calcAverage(65, 54, 49);

function checkWinner() {
    if (averageKoalas >= 2 * averageDolphins) {
        return console.log(`Koalas Win ( ${averageKoalas} vs. ${averageDolphins} )`)
    } else if (averageDolphins >= 2 * averageKoalas) {
        return console.log(`Dolphins Win ( ${averageDolphins} vs. ${averageKoalas} )`)
    } else {
        console.log(`No Winner`)
    }
};

checkWinner();
*/

/////////////// CODING CHALANGE 2////////////////
/*let tip;
const calcTip = (bill) => {
    let percentage;
    bill >= 50 && bill <= 300 ? percentage = .15 : percentage = .20
    return tip = bill * percentage;
}

console.log(calcTip(100));
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/
/*
const Sefa = {
    firstName: 'Sefa',
    lastName: 'Kotancılar',
    friends: ['Sena', 'Merve', 'Saleha'],
    birthYear: 1992,
    hasDriversLicense: true,
    job: 'pilot',
    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    getsummary: function () {
        return console.log(`${this.firstName} ${this.lastName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : "no"} drivers licence.`);
    }
}

Sefa.getsummary();

console.log(`${Sefa.firstName} has ${Sefa.friends.length} friends, and his best friend is ${Sefa.friends[0]}`);
*/

/////////////// CODING CHALANGE 3 ////////////////
/*
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}

const John = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}
Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi)

if (Mark.bmi > John.bmi) {
    console.log(`Mark's BMI ${Mark.bmi} is higher than John's BMI ${John.bmi}`);
} else if (Mark.bmi < John.bmi) {
    console.log(`John's ${John.bmi} is higher than Mark's BMI ${Mark.bmi}`);
} else {
    console.log('Both have same BMI');
};

for (let i = 1; i <= 10; i++) {
    console.log(` Lifting weights repetition ${i} 🏋️‍♀️`);
}


const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

console.log(...days)
*/

/////////////// CODING CHALANGE 4 /////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTips = () => {
    for (let i = 0; i < bills.length; i++) {
        let percentage = bills[i] >= 50 && bills[i] <= 300 ? 0.15 : 0.2;
        let calculatedTip = percentage * bills[i];
        tips.push(calculatedTip);
        let calculatedTotal = tips[i] + bills[i];
        totals.push(calculatedTotal);
    }
}

calcTips();
console.log(...bills)
console.log(...tips);
console.log(...totals);



let average;
let sum = 0
const calcAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}

console.log(calcAverage(totals));


