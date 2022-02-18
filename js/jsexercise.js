// Warmup: Create a function which returns true if the given argument is a number, false if it is not a number




    function isNumber(){
    let userNum = parseInt(prompt("Please provide a #"));
    if (userNum % 1 === 0 || userNum % 2 === 0)
        return true;
}
console.log(isNumber)