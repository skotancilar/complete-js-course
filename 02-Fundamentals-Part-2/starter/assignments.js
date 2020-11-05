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
