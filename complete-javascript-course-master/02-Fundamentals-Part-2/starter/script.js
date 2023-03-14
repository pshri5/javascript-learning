'use strict';
// Strict mode helps to not allow certain things and inform about certain eroors in the developer console. Without this the javascript progrm will just fail silently.

//functions are piece of code that can be reused in a program

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and it's capital city is ${capitalCity}`);
}

describeCountry('Finland', 6, 'Helsinki');

//coding challenge on functions

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins Win');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas Win');
    }
}

// Arrays intro
// Even though we use const to declare our array, we can change the data inside the array which seems like a contradiction to what we know about const but it is posssible because array is not a primitive value. Also we can change or mutate some values inside the array but we cannot replace the whole array.

// Basic Array operations
