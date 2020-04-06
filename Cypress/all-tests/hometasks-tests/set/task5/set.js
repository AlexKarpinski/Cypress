let Chance = require('chance');
let chance = new Chance();

let currencySet = new Set(['USD', 'RUR', 'BYN']);

let currencyArray = Array.from(currencySet);
let randomValue = chance.pickone(currencyArray);
let randomTwoValues = chance.pickset(currencyArray, 2);

let random = chance.integer({min: 1, max: currencyArray.length});
let randomValues = chance.pickset(currencyArray, random);

console.log(randomValue);
console.log(randomTwoValues);
console.log(randomValues);
