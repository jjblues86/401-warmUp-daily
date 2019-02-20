'use strict';
// Array Filter
const numArray = [1,2,3,4,5,6,7,8,9,10];

const warmUpFilter = (array,callback) => {
    let output = [];

    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
}

const testFilterArray = warmUpFilter(numArray, x => x > 5);
testFilterArray;

// Reduce
const warmUpReduce = (array,callback,accumulatorValInt) => {
    let accumulator = accumulatorValInt;

    for(let i = 0; i < array.length; i++) {
        accumulator = callback(array[i],accumulator, i);
    }
    return accumulator;
}

const testArrayReduced = warmUpReduce(numArray,(currentVal,accumulator) => {
    return currentVal + accumulator;
},0)
testArrayReduced;

// Map
const warmUpMap = (array,callback) => {
    let output = [];

    for(let i = 0; i < array.length; i++) {
        output[i] = callback(array[i]);
    }
    return output;
}

const testArrayMap = warmUpMap(numArray, x => x+1);
testArrayMap;

// For Loop
const forLoop = (array) => {

    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
forLoop(numArray);

// While Loop
const whileLoop = (array) => {
    let counter = 0;

    while(counter < numArray.length){
        console.log(array[counter]);
        counter++
    }
};
whileLoop(numArray);


// Objects destructing
const people = ['Kookla','Fran','Ollie'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
}

let state = {people:{...people}, stuff:{...stuff}};
state;

let newPeople = ['Odie', ...people, 'Garfield'];
newPeople;
const newStuff = {...stuff, cars:[...stuff.cars, 'New car']};
newStuff
let newState = {people:['Odie',...people,'Garfield'], stuff: {...stuff, cars:[...stuff.cars, 'New Car']}};