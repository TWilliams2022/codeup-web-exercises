//
// Warmup: Write a function called removeAll that takes two parameters. One that represents an array and
// another that represents a value to be removed from that array.
//     When called this function should return an array with
//     all the values of the original array except the specified value to be removed.
//     ex:
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// console.log(removeAll(bugs, "ant"));

// should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]

// function removeAll() {
//
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
//     bugs.splice(1)
//
// }
//
// console.log(removeAll)

//or

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(anArr, valueRemove) {

    let filteredArray = [];
    for (let i = 0; i < anArr; i++) {
        if (valueRemove === anArr[1]) {
            continue;
        }
        filteredArray.push(anArr[1]);
    }
    return filteredArray;