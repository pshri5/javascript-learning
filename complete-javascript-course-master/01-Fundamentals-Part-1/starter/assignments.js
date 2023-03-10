// Values and variables in javascript
let country = "India";
let continent = "Asia";
let population = 140;

console.log(country);
console.log(continent);
console.log(population);
// data types in javascript
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// let const and var difference
language = 'Hindi';
const currency = "INR";
currency = 'USD';
console.log(language);
console.log(currency);

//coding challenge #1
const massMark;
const massJohn;
const heightMark;
const heightJohn;
// bmi formula setup
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark);
console.log(bmiJohn);
//Comparing the bmi

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

