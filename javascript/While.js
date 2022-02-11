//while loop exercise

/*let x = 2

while(x <= 65536){

    console.log("This is the ending number " + x)
    x *= 2;

    }


console.log("the loops is done!");


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

'An ice cream seller cant go home until she sells all of her cones. '
'First write enough code that generates a random number between 50 and 100 representing '
'the amount of cones to sell before you start your loop. ' 
'Inside of the loop your code should generate another random number between 1 and 5, ' 
'simulating the amount of cones being bought by her clients. ' 
'Use a do-while loop to log to the console the amount of cones sold to each person. ' 
'The below code shows how to get the random numbers for this exercise.

    
    5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones*/

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    let conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(allCones);
    console.log("There are " + allCones + " cones left to sell!");
    if (conesSold > allCones){
       console.log("I can not sell you " + conesSold + " cones, becuase I have " + allCones);
    } else {
        console.log(conesSold + " cones are sold")
    }
    
} while( allCones > 0);
console.log("Let's go home! :)");


