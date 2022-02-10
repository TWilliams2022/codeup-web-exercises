   // Prompt the user for an odd number between 1 and 50.
   // Use a loop and a break statement to continue prompting the user if they enter invalid input.
 //   Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.




for (var i = 1; i <= 50; i++) {
    let userNumber = parseInt(prompt("ODD NUMBER HERE PLEASE(1-50): "));
    if (i % 2 !== userNumber) {
        prompt("")
        if (userNumber % 2 !== 0)
            ;
    }
}
   /* if (i === userNumber) {
        console.log('Your Number');
        break;
     */
