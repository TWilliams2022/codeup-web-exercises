"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function anazlyze(color) {

// if (color === "blue") {
 //    console.log("My favorite color is blue!");
 //}
  //  if (color === "red") {
   //     console.log("red is the color of blood!");
   // }
   //else if (color === "orange") {
   //     console.log("oranges are orange!");
   // }
   // else if (color === "green") {
    //    console.log("Money is green!");
   // }
   //else if (color === "cyan") {
    //    console.log("I don't know much about cyan")
   // }
//}
//anazlyze("blue");
//anazlyze("green");
//anazlyze("orange");
//anazlyze("cyan");
//anazlyze("red");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];

    /* function anazlyze(randomColor) {

   if (colors === "blue") {
        console.log("My favorite color is blue!");
    }
    if (colors === "red") {
        console.log("red is the color of blood!");
    }
    else if (colors === "orange") {
        console.log("oranges are orange!");
    }
    else if (colors === "green") {
        console.log("Money is green!");
    }
    else if (colors == 'yellow') {
        console.log("I don't know much about cyan")
    }
}
console.log(anazlyze(randomColor)) // = string literal
console.log(randomColor);
*/

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];

//SAME AS #1

//function analyze(color){

//switch (randomColor){
 //   case 'blue':
 //     console.log("My favorite color is blue!");
 //       break;
 //   case 'red':
  //    console.log("red is the color of blood!");
  //      break;
  //  case 'orange':
  //    console.log("oranges are orange!");
   //     break;
   // case 'green':
   //   console.log("Money is green!");
   //     break;
    //default:
    //    console.log("Pick a different color!");
// }
//}

/**
* TODO:
* Prompt the user for a color when the page loads, and pass the input from the
* user to your `analyzeColor` function. Alert the return value from your
* function to show it to the user.
*/

/* var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


let yourColor = prompt("what is your favorite color?")
alert(analyze(color))


*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*var num = ['0', '1', '2', '3', '4', '5'];
var ranLucNum = num[Math.floor(Math.random() * num.length)];


function calculateTotal(ranlucNum, totalAmount) {

    if (ranLucNum === "0") {
        console.log("Sorry no discount" + (totalAmount * 0) + "!" );
    }
    else if (ranlucNum === '1') {
        console.log("You received a 10% discount, which is $" + (totalAmount * .10) + "!");
    }
    else if (ranlucNum === '2') {
        console.log("You received a 25% discount, which is $" + (totalAmount * .25) + "!");
    }
    else if (ranlucNum === '3') {
        console.log("You received a 35% discount, which is $" + (totalAmount * .35) + "!!!");
    }
    else if (ranlucNum === '4') {
        console.log("You received a 50% discount, which is $" + (totalAmount * .25) + "!");
    }
    else (ranlucNum === '5')
        console.log("Everything is free, which is $" + (totalAmount * 0) + "!!");

}

console.log(calculateTotal('2',100));
console.log(calculateTotal('1',100));
console.log(calculateTotal('4',100));
console.log(calculateTotal('3',100));

*/


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);


/*var num = ['0', '1', '2', '3', '4', '5'];
var ranLucNum = num[Math.floor(Math.random() * num.length)];

let totalAmount = prompt("What is the total for your bill?")


function calculateTotal(ranlucNum, totalAmount) {

if (ranLucNum === "0") {
    console.log("Sorry no discount" + (totalAmount * 0) + "!" );
}
else if (ranlucNum === '1') {
    console.log("You received a 10% discount, which is $" + (totalAmount * .10) + "!");
}
else if (ranlucNum === '2') {
    console.log("You received a 25% discount, which is $" + (totalAmount * .25) + "!");
}
else if (ranlucNum === '3') {
    console.log("You received a 35% discount, which is $" + (totalAmount * .35) + "!!!");
}
else if (ranlucNum === '4') {
    console.log("You received a 50% discount, which is $" + (totalAmount * .25) + "!");
}
else (ranlucNum === '5')
console.log("Everything is free, which is $" + (totalAmount * 0) + "!!");

}

alert("Your lucky number was " + ranLucNum + ", and the price before the discount was $"
    + totalAmount + ", which your discount is " (totalAmount * ));
*/


/**
* TODO:
* Write some JavaScript that uses a `confirm` dialog to ask the user if they
* would like to enter a number. If they click 'Ok', prompt the user for a
* number, then use 3 separate alerts to tell the user:
*
* - whether the number is even or odd
* - what the number plus 100 is
* - if the number is negative or positive
*
* Do *NOT* display any of the above information
* if the user enters a value that is not of the number data type.
* Instead, use an alert to inform them of the incorrect input data type.
*
*
* Can you refactor your code to use functions?
* HINT: The way we prompt for a value could be improved
*/

let userNum = confirm("Would you like to enter a number?");

// is even or odd
if (userNum){
    let userNum = parseInt(prompt("enter a number")
if (userNum % 2 === 0 ){
    alert("Your number is even")
}
else {
    alert("Your number is odd")
}
//plus 100
alert("Your number plus 100 is, " + (userNum + 100))

    // positive or negative
    if (userNum > 0 ){
            alert("Your number is positive")
        }
    else {
            alert("Your number is negative")
        }

