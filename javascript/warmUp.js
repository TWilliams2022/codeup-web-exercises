// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)


    aVG = [95, 74, 86, 100];

    function findAverage(aVG) {
        var total = 0;
        var count = 0;

        aVG.forEach(function(item, index) {
            total += item;
            count++;
        });

        return total / count;
    }

    console.log(findAverage(aVG));


