"use strict";
//use the object literal iteration ..{}..

let car = {};
console.log(typeof car);

extended
assign properties to OBJECT ..CAR..

car.make = 'ford';
console.log(car);
//
car.model = 'Mustang';
console.log(car);
//
can also see the model alone
//
console.log(car.model)
//
better example
//
let cohort = {
        name:'Fortan',
        startDate:'01/03/2021',
        endDate:'07/20/2022'
}
console.log(cohort.name);
//
another axample
//
console.log("The car model is " + car.make);
//
accessing Properties
console.log(Object.keys(car));  //shows [ 'make', 'model' ]
car.year = '1994'; //is added in with the mustang info top^^^
console.log(Object.keys(car));
//
in Keyword
//
if  (!('numOfWheels' in car)) {
car.numOfWheels = 4;
}
console.log(car);
//
Nested Values

let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ['Tyreik','Jasmine','Kyrie'],

}
console.log(elixirCohort.students[1]);

more
//
elixirCohort.students = {
{
    name: 'Tyreik',
    age: '27',
},
{
    name: 'Jasmine',
        age: '26'
}
};

console.log(elixirCohort.students[1].name);

assigning functionality (Behaviors) to an object

car.honk = function (){
    console.log('HONQUE Honque')
}
//car.honk();