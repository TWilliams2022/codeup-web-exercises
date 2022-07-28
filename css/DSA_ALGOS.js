//Bubble sorting algo that compares left to right number until it is in ascending order
let unsortedArr = [10, 5, 9, 7, 10, 1, 2, 5, 4];

// let us know if swap is happening -- will be using swapped in the function
let swapped;

// using bubble sort -- passing in ARR as the param.
function BubbleSort(arr) {

    //given the value false so that ot doesn't stop executing
    swapped = false;

    // were subtracting from the end of the array because that is where we stop
    let end = arr.length - 1;

    // for loop needed for iterations
    // end is the current array that is being iterated through
    for (let i = 0; i < end; i++) {

        //arr i is the numbers in the array
        if (arr[i] > arr[i + 1]) {
            //giving swapped a boolean of true so that it can continue
            swapped = true;

            // giving temp the value of arr[i]
            let temp = arr[i];

            // giving arr[i] the value of arr[i +1]
            arr[i] = arr[i + 1];

            // giving arr[i + 1] the value of temp
            arr[i + 1] = temp;
        }
//don't have to go to the end everytime so decrement by 1 everytime
        end--;
    }
}

//do while loop helps continue until finished
do(
    BubbleSort()
)
while (swapped);

console.log(unsortedArr);