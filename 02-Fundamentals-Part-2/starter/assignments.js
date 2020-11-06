console.log(`----------ASSIGNMENTS----------`)
//LECTURE 33: FUNCTIONS

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}
    `
}

const descTurkey = describeCountry('Turkey', 85, 'Ankara');
const descPakistan = describeCountry('Pakistan', 200, 'Islamabad');
const descUSA = describeCountry('USA', 300, 'Washington DC');

console.log(descPakistan, descTurkey, descUSA);

//LECTURE 34: FUNCTIONS DECLERATIONS VS. EXPANSIONS
const worldPopulation = 7900;
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
};

let popTurkey = percentageOfWorld1(85);
let popPakistan = percentageOfWorld1(200);
let popUSA = percentageOfWorld1(300);

console.log(popTurkey, popPakistan, popUSA);

const percentageOfWorld2 = function (population) {
    return Number(((population / worldPopulation) * 100).toFixed(2));
};

popTurkey = percentageOfWorld2(85);
popPakistan = percentageOfWorld2(200);
popUSA = percentageOfWorld2(300);

console.log(popTurkey, popPakistan, popUSA);

//LECTURE 35: ARROW FUNCTIONS

const percentageOfWorld3 = population => Number(((population / worldPopulation) * 100).toFixed(2));

popTurkey = percentageOfWorld3(85);
popPakistan = percentageOfWorld3(200);
popUSA = percentageOfWorld3(300);

console.log(popTurkey, popPakistan, popUSA);

//LECTURE 36: FUNCTIONS CALLING OTHER FUNCTIONS

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world`
}

const tr = describePopulation('Turkey', 85);
const pk = describePopulation('Pakistan', 200)
const us = describePopulation('USA', 300);

console.log(`${tr} 
${pk} 
${us}`);


//LECTURE 39: BASIC ARRAY OPARATIONS

const countries = ['Turkey', 'Pakistan', 'USA', 'Spain'];
const populations = [85, 200, 300, 47];

console.log(populations);

const percentages = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]),
percentageOfWorld3(populations[2]),
percentageOfWorld3(populations[3])];

console.log(percentages);

//LECTURE 42:INTRODUCTION TO OBJECTS

const myCountry = {
    country: 'Turkey',
    capital: 'Ankara',
    language: 'Turkish',
    population: 85,
    neighbours: ['Bulgaria', 'Greece', 'Georgia', 'Azerbaijan', 'Armenia, Iran', 'Iraq', 'Syria'],
    describe: function () {
        return console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function () {
        this.neighbours.length > 0 ? this.isIsland = true : this.isIsland = false;
        return console.log(this.isIsland);
    }
}

//LECTURE 43:LECTURE: DOT VS. BRACKET NOTATION

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//OBJECT METHODS

myCountry.describe();
myCountry.checkIsland();

//LECTURE 46: ITERATION: THE FOR LOOP

for (let i = 1; i <= 50; i++) {
    //console.log(`Voter number ${i} is currently voting`);
}

let percentages2 = []
for (let i = 0; i < populations.length; i++) {
    if (percentages[i] !== percentages2[i]) {
        percentages2[i] = percentageOfWorld1(populations[i]).toFixed(2); continue
    }
}

console.log(...percentages2);
console.log(...countries)