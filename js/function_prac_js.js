/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */

//function getName(){

//    return prompt("what your name?")

//}
//function showName(username){

//    alert("Your name is " + username);
//}
//showName(getName());


//Make a function named isLowerCase(letter) which returns true if the parameter is lowercased; otherwise it returns false
function isLowerCase(letter) {
    return letter == letter.toLowerCase() && letter != letter.toUpperCase();
}

console.log("Hey", isLowerCase("Hey"));
console.log("HEY", isLowerCase("HEY"));
console.log("hey", isLowerCase("hey"));

//Write a function named double(n) that returns a number times two
function double(n) {
    return n * 2;
}
console.log( "Calculate 2 x 2 = " ,double(2));
console.log( "Calculate 2 x 3 = " ,double(3));
console.log( "Calculate 2 x 1 = " ,double  (1));

//Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type; otherwise it returns false.
//edited)
function areIdentical(input1,input2) {

    return input1 === input 2
}

console.log("", areIdentical("one", "one"));
console.log("", areIdentical("ONE","OnE"));
console.log("", areIdentical("2","2"));
console.log("", areIdentical("one", 1));