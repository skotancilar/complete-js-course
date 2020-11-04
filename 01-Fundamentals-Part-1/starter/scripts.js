/////////////// CODING CHALANGE 1 - 2 ////////////////
/*console.log(`----------SCRIPTS----------`)
let markMass1 = 78,
    markMass2 = 95,
    markHeight1 = 1.69,
    markHeight2 = 1.88,
    johnMass1 = 92,
    johnMass2 = 85,
    johnHeight1 = 1.95,
    johnHeight2 = 1.76,
    markBMI1, markBMI2,
    johnBMI1, johnBMI2;

markBMI1 = markMass1 / markHeight1 ** 2;
markBMI2 = markMass2 / markHeight2 ** 2;
johnBMI1 = johnMass1 / johnHeight1 ** 2;
johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(markBMI1, johnBMI1);
console.log(markBMI2, johnBMI2);

MarkHigherBmi = markBMI1 > johnBMI1;

console.log(MarkHigherBmi);

/*const std = setToDecimal = (el, para) => {
    return parseFloat((el.toFixed(para)));
}

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's BMI (${johnBMI1.toFixed(2)})`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's BMI (${markBMI1.toFixed(2)})!`);
};

/*if (-10) {
    console.log(`+`)
} else {
    console.log(`-`)
}
*/
/*
const licenceName = 'Sefa';
const birthYear = 1992;
let now = new Date();
let age = now.getYear() - birthYear;
let yearsLeft = 18 - age;

if (age < 18) {
    console.log(`${ licenceName } can start driving license 🚗.`)
} else {
    console.log(`${ licenceName } is too young.Wait for another ${ yearsLeft }  years.`)
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

let ranks = ['st', 'nd', 'th'];
let rank;
if (century % 10 === 1) {
    rank = ranks[0];
} else if (century % 10 === 2) {
    rank = ranks[1];
} else {
    rank = ranks[2];
};

console.log(`${ century } ${ rank } century`);
*/
/*
/////////////// CODING CHALANGE 3 ////////////////
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;

console.log(averageKoalas);
console.log(averageDolphins);

if (averageDolphins > averageKoalas) {
    console.log(`The Winner is DOLPHINS`);
} else if (averageKoalas > averageDolphins) {
    console.log(`The Winner is KOALAS`);
} else {
    console.log(`No winner`);
}

//////////////////////////////////////////////

if ((averageDolphins > averageKoalas) && (averageDolphins >= 100)) {
    console.log(`The Winner is DOLPHINS`);
} else if (averageKoalas > averageDolphins && (averageKoalas >= 100)) {
    console.log(`The Winner is KOALAS`);
} else if ((averageKoalas === averageDolphins) && (averageKoalas >= 100) && (averageDolphins >= 100)) {
    console.log(`DRAW!`);
} else {
    console.log(`NO Winner`);
};
*/
/*
const day = 'pazartesi'

switch (day) {
    case "pazartesi":
        console.log('Pazartesi haftanın ilk günü');
        break;
    case 'sali':
        console.log('Salı sallanır.');
        break;
    case 'carsamba':
        console.log('Çarşamba çarşafa dolanır.')
        break;
    case 'persembe':
        console.log('Perşembe perişan olur.')
        break;
    case 'cuma':
        console.log('Cuma mubarek gün.')
        break;
    case 'cumartesi':
    case 'pazar':
        console.log('Resmi Tatil!')
        break;
    default:
        console.log('Böyle bir haftanın günü yoktur. Kontrol edip tekrar deneyiniz.')

};
*/

const bill = 430;

const tip = bill > 50 && bill < 300 ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}$, the tip was ${tip}$ and the total value is ${bill + tip}$.`)