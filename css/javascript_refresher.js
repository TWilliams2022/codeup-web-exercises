var tweet = prompt('What happened today?')
var tweetCount = tweet.slice(0,250);
alert(tweetCount);

// refactored to
alert(prompt("What happened today?").slice(0,140));

// allows message to be under 250

var name = prompt(' What is your name? ')
var firstChar = name.slice(0,1).toUpperCase();
var finishedName = name.slice(1, name.length);


function lifeInWeeks(age) {

    /************Don't change the code above************/

        //Write your code here.
    var yearsLeft = 90 - age;
    var days = yearsLeft * 365;
    var weeks = yearsLeft * 52;
    var months = yearsLeft * 12;

    return ("You have " + days + " days, " + weeks + " weeks, " + months + " months left!")

}

lifeInWeeks(17)

