/*   // Prompt the user for an odd number between 1 and 50.
   // Use a loop and a break statement to continue prompting the user if they enter invalid input.
 //   Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


var oddNumber = promptForOddNumberInRange(1, 50);
oddNumber = parseInt(oddNumber);
printOddNumbersInRangeWithSkip(1, 50, oddNumber);
function printOddNumbersInRangeWithSkip(low, high, skipNumber) {
    // INCLUSIVE
    for (let i = low; i <= high; i++) {
        if(i === skipNumber || i % 2 === 0) {
            // if i is the skipNumber then output something special
            if(i === skipNumber) {
                console.log("Yikes! Skipping number: " + i);
            }
            continue;
        }
        // if you get here then should be an odd number that is within range and not skipnumber
        console.log("Here is an odd number: " + i);
    }
}
function promptForOddNumberInRange(low, high) {
    // loop until user gives an odd number in the range INCLUSIVE
    var result;
    while(true) {
        result = prompt("Enter an odd number from " + low + " to " + high);
        // console.log(result);
        if(result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    // console.log(result);
    return result;
}