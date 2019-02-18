'use strict';
// forLoop
const numArray = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (array) => {
    for(let i = 0; i < numArray.length; i++){
        console.log(array[i]);
    }
};
forLoop(numArray);


// whileLoop
const whileLoop = (array) => {
    let counter = 0;
    while(counter < numArray.length){
        console.log(array[counter]);
        counter++;
    }
};
whileLoop(numArray);


// Map
const warmUpMap = (array, callback) => {
    let output = [];
    for(let i = 0; i < array.length; i++){
        output[i] = callback(array[i]);
    }
    return output;
};
const testArrayMap = warmUpMap(numArray, x => x + 1);

// Filter
const warmUpFilter = (array, callback) => {
    let output = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            output.push(array[i]);
        }
    }
    return output;
};
const testArrayFilter = warmUpFilter(numArray, x => x > 5)

// Reduce
const warmUpReduce = (array, callback, accumulatorInitialValue) => {
    let accumulator = accumulatorInitialValue;

    for(let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
};
const testArrayReduced = warmUpReduce(numArray,(accumulator, currentValue) => {
    return accumulator + currentValue;
} ,0);
console.log(testArrayFilter);



// Destructuring

const people = ['Kookla','Fran','Ollie'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
}

let state = {people:{...people}, stuff: {...stuff}};
state;

let newPeople = ["Odde", ...people, "Garfield"];
newPeople;
const newStuff = {...stuff, cars : [...stuff.cars, 'New car']};
newStuff
let newState = {people:['Odde', ...people, 'Garfield'],stuff: {...stuff, cars:[...stuff.cars, 'New Car']}};
newState;

console.log(state);
console.log(newState);
console.log(people);
console.log(newPeople);
console.log(stuff);
console.log(newStuff);