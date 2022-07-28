// ***********BUBBLE SORT******************

let UnsortedArray = [11, 9, 1, 7, 1, 3, 30, 2];
let swapped;

function BubbleSortMe(arr){
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0; i < end ; i++) {
        if(arr[i] > arr[i + 1]){
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    end--;
}

do{
    BubbleSortMe(UnsortedArray)
} while(swapped)

console.log(UnsortedArray)




//***********Binary SEARCH******************
// L       M        R
//[-1, 0, 3, 5, 9, 12]
//target = 9
//o(n)
//write algo in o(log n)
//
// var BinarySearch = function (nums, target) {
//
//     let left = 0;
//     let right = nums.length - 1;
//
//     while(left <= right){
// let mid = left+ Math.floor((right - left)/2)
//     }
//
// }
//


