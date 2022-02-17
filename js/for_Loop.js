// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
//Use %

for (t = 0; t <= 30; t++){
    if(t == 0){
        console.log("Even #: " + t);
    } else if (t % 2 == 0){
        console.log("Even #: " + t);
    }
    else{
        console.log(" Odd #: " + t);
    }
} or

if (i % 2 === 0)
console.log(t)


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

for (w = 1; w <= 40; w++){
    if(w % 3 === 0 && w % 5 === 0){
        console.log(w + "Marco Polo!!!");
    }
    else if (w % 3 === 0 ){
        console.log("Marco!");
    }
    else if (w % 5 === 0){
        console.log(w + "Polo!!");
    }
    else console.log(w + " I'm done playing!");
}
