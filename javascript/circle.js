
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                    let area = Math.PI * Math.pow(3,2)
            return area ; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = Math.PI * Math.pow(3,2)
                    if (doRounding){
                               return Math.round(area);
                    }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + " is: " + Math.round(area));
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

//this. would be circle
    var circle = {
        radius: 5,

        //get area takes in answer of function
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * Math.pow(5,2) ////return Math.PI * this.radius^2
            return area ; // TODO: return the proper value
        }, //console.log(circle.getArea());

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = Math.PI * Math.pow(5,2)
            if (doRounding){
                return Math.round(area); //console.log(Math.round(this.getArea()));
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + " is: " + Math.round(area));
        }
    };

    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

