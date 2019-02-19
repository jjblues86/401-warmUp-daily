'use strict';
// Objects
const people = ['Kookla','Fran','Ollie'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
}

let state = {people:{...people}, stuff:{...stuff}, cars:[...stuff.cars,'New Car']};
state;
let newPeople = ['Odie', ...people, 'Garfiled'];
newPeople;
const newStuff = {...stuff, stuff:[...stuff.cars,'New car'] };
newStuff
let newState = {people:['Odie', ...people,'Garfiled'], stuff:{...stuff, cars:[...stuff.cars, 'New Cars']} };
newState

console.log(people);
console.log(newPeople);
console.log(stuff);
console.log(newStuff);
console.log(newState);

// for Loop Arrays
const numArray = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
forLoop(numArray);

// While loop
const whileLoop = (array) => {
    let counter = 0;

        while(counter < numArray.length) {
            console.log(array[counter]);
            counter++;
        }
};
whileLoop(numArray);

// Map
const warmUpMap = (array, callback) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        result[i] = callback(array[i]);
    }
    return result;
};
const testArrayMap = warmUpMap(numArray, x => x + 1 );
testArrayMap;

// Filter
const warmUpFilter = (array, callback) => {
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result.push(array[i]);
        }
    }

    return result;
};
const testArrayFilter = warmUpFilter(numArray, x => x > 5 );
testArrayFilter;

// Reduce
const warmUpReduce = (array, callback, accumulatorIntVal) => {
    let accumulator = accumulatorIntVal;

    for(let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator,accumulatorIntVal, array[i], i);
    }
    return accumulator;
}
const testArrayReduce = warmUpReduce(numArray, (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
testArrayFilter;