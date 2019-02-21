'use';
// Object destructuring
const people = ['Kookla','Fran','Ollie'];

const stuff = { tv: 'huge', radio: 'old', toothbrush: 'frayed', cars: ['Toyota','Mazda'] }

let state = {people:{...people}, stuff:{...stuff}};
state;

let newPeople = ['Odie', ...people, 'Garfield'];
newPeople;

const newStuff = {...stuff, car: [ ...stuff.cars, 'New Car']};
newStuff

let newState = {people:['Odie', ...people, 'Garfield'], stuff:{...stuff, car: [ ...stuff.cars, 'New Car']}};
newState;

// Array for loop

const numArray = [1,2,3,4,5,6,7,8,9,10];


const forLoop = (array) => {

    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};
forLoop(numArray);

// While Loop
const whileLoop = (array) => {
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        console.log(array[counter]);
        counter++
    }
};
whileLoop(numArray);

