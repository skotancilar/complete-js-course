//LECTURE 10: VALUES AND VARIABLES
console.log(`----------ASSIGNMENTS----------`)
country = 'Turkey', continent = 'Eurasia',
    population = 85;

console.log(country, continent, population);

// LECTURE 11: DATA TYPES
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE 12: LET,CONST,VAR
language = 'Turkish';
console.log(language);

// LECTURE 12:BASIC OPERATORS
//1
function divideCountryPopulation(country, divideTo = 2) {
    if (country === 'Turkey') {
        console.log('Şehitler Ölmez, Vatan Bölünmez');
    } else {
        let newPopulation = population / divideTo;
        console.log(newPopulation);
    }
};

divideCountryPopulation('Turkey');
divideCountryPopulation('Armenia', 323);
//2
population++;
console.log(population);

//3
let populationFinland = 6;

console.log(population > populationFinland);

//4
console.log(population > 33);

//5

let description = country + ' is in ' + continent + ' and it has ' + population + ' million people speak ' + language;
console.log(description);

// LECTURE 17:STRINGS AND TEMPLATE LITERALS
description = `${country} is in ${continent} and it has ${population} million people speak ${language}`;

// LECTURE 18: TAKING DECISIONS: IF/ELSE STATEMENTS

if (population > 33) {
    console.log(`${country}'s population is above than average.`);
} else {
    console.log(`${country}'s population ${33 - population} million below average.`);
};

// LECTURE 18: EQUALITY OPERATORS: == VS. ===

//1
/*const numNeighbors = Number(prompt(`How many counties does your country have?`));*/
// 2-3-4-5-6-7
if (numNeighbors === 1) {
    console.log(`Only ${numNeighbors} border!`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border!`);
} else if (numNeighbors === 0) {
    console.log(`No borders!`);
};


