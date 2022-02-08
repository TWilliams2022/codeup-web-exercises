//Create a function called getToDestination which will help determine how a person can get to their destination!

 //   It will accept 4 arguments and the parameter names are:
 //   age - the age of the rider
//isInsured - a boolean telling the function if the rider has insurance
//hasCar - a boolean describing if the rider has a car
//canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//If the rider is over 16, has insurance, and has a car then they can use their own vehicle
//If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
//If the rider meets none of the above, they should call a friend for a ride!
 //   This getToDestination should not return any value, but rather console log based on the conditions met.

 //   getToDestination, part 2
//Create a function called canGetRideshare() which will RETURN a boolean
//It will determine if there are drivers nearby and the person has enough money for the ride
//Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
//Call canGetRideshare() in the else if after !isLegalDriver &&...
//Be sure to log to the user if they can or cannot get a rideshare

// part 1

var age = 16;
var isInsured = true;
var hasCar = true;
var canGetRideShare = true;

function getToDestination(age, isInsured, hasCar, moneyForRide, driverNearBy)
{
    if (age > 16 && isInsured && hasCar) {
        console.log("No need for rideshare, you can drive yourself pal!");
    } else if (age <= 16 && isInsured === false || hasCar === false && canGetRideShare(true,true))
        //or
    //else if (canGetRideShare(true,true)) will take in getToDestination from second function which is now in the 1st function
    {
        console.log("You're able to get a ride!");
    } else {
        console.log("You may need to use your life-line and phone a friend!");
    }
}
getToDestination(15, false, false, true);
getToDestination(14, true, true, true);
getToDestination(14, false, true, true);
getToDestination(16, false, true, true);


//part 2
let getRideShare = true;
let driveNearBy = true;
let moneyForRide = true;
let isLegalDriver = true;

function canGetRideshare(driveNearBy, moneyForRide) {

    if (moneyForRide && driveNearBy)
    {
        return true;
    }
    else
    {
        return false;
    }

}              //age isInsured hasCar canGetRideShare(true,false)
getToDestination(16, true, true , true, false);

