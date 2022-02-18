// Warmup: Create a function which returns true if the given argument is a number, false if it is not a number



    function isNumber(userNum){
    if (userNum % 1 === 0 || userNum % 2 === 0)
        return true;
}

console.log(isNumber(17))

function isNumber(userNum){
    return userNum % 1 === 0 || userNum % 2 === 0;

}

console.log(isNumber("18"));

//or

function isNumber(userNum){

    return !!parseFloat(userNum)

}
console.log(isNumber(12))