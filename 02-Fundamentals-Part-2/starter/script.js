'use strict';
/////////////// CODING CHALANGE 1 - 2 ////////////////

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