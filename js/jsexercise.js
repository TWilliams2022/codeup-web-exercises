// Warmup: Create a function which returns true if the given argument is a number, false if it is not a number



    function isNumber(userNum){
    if (userNum % 1 === 0 || userNum % 2 === 0)
        return true;
}

console.log(isNumber(NaN))

//or

// function isNumber(userNum){
//
//     return !!parseFloat(userNum)
//
// }
// console.log(isNumber(12))