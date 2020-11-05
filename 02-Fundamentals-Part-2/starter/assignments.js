function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}
    `
}

const descTurkey = describeCountry('Turkey', 85, 'Ankara');
const descPakistan = describeCountry('Pakistan', 200, 'Islamabad');
const descUSA = describeCountry('USA', 300, 'Washington DC');

console.log(descPakistan, descTurkey, descUSA);

