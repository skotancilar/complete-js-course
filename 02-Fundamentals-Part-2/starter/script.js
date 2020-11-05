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
let tip;
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

const Sefa = {
    firstName: 'Sefa',
    lastName: 'Kotancılar',
    friends: ['Sena', 'Merve', 'Saleha']
}

console.log(`${Sefa.firstName} has ${Sefa.friends.length} friends, and his best friend is ${Sefa.friends[0]}`);