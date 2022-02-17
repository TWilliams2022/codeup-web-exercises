"use strict"

//console.log("Hello From EXTERNAL JAVASCRIPT");

//alert("Welcome to my website!")

//let yourName = prompt("What is your name?")

//alert("Welcome " + yourName + "!")

//let favColor = prompt("What is your favorite color")

//alert("Hey, " + yourName + " my favorite color is " + favColor + " as well!");

i could also use parseInt instead of Number but parseInt(takes the number from the words)
//var littleMermaid = parseInt(prompt("How many days would you like to rent Little Mermaid ?"));
//var brotherBear = Number(prompt("How many days would you like to rent Brother Bear?"));
//var hercules = Number(prompt("How many days would you like to rent Hercules?"));

//var total = (littleMermaid + brotherBear + hercules) * 3;

//console.log(total)


//var gOOgle = Number (prompt("How many hours have you worked this week with GOOGLE?"));
//var aMazon = Number (prompt("How many hours have you worked this week with AMAZON?"));
//var faceBook = Number (prompt("How many hours have you worked this week with FACEBOOK?"));

//var payForWeek = ((gOOgle * 400)+ (aMazon * 380) + (faceBook * 350));

//console.log(payForWeek);



//var seatsRemaining = 29;
//var classSchedCon = confirm("Do you have a class @ 10am?");




//if (oK < 30) {

  //  alert("Congrats youre good to go!");
//}
//else (oK => 30)
    //alert("Maybe Next Time!");


//A product offer can be applied only if a
//person buys more than 2 items,
//and the offer has not expired. Premium members do
//not need to buy a specific amount of products.

//Complete exercise 3 from the previous lesson, but write your code in
// the external.js file instead of in the console.
//When the exercise asks you to use a number,
// instead use a prompt to ask the user for that number.
//Use an alert to show the results of each problem.

let premMembers = confirm("Are you a Premium member?");

var itemCart = Number (prompt("How many items are in your cart?"));

if (itemCart > 2) {
    alert("Hooray! You can apply to our offer!")
}
else if (itemCart <= 2) {
    alert("Sorry You're not eligble for the discount, unless you're a Premium Packaged! More Items Needed!:(")
}
if (premMembers) {
    alert("Thank you for being a dedicated member!")
}
else {
    alert("No discount applie :(");
}
alert("You have " + itemCart + " items in your cart!")


