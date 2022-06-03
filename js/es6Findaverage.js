// Write a function called findAverage that takes in an array of integers r
// epresenting grades and returns the average.



const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));


