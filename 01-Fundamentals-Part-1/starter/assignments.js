//LECTURE 10: VALUES AND VARIABLES
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

// BASIC OPERATORS
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

let description = country + ' is in ' + continent + ' and it has ' + population + ' people speak ' + language;
console.log(description);