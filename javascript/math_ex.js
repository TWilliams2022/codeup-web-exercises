

let randomNum = Math.random();
console.log("before multiplying " + randomNum);
console.log("after " + (randomNum * 100));

//set the range to 100.... the floor is 20
// finds exclusive 1.... (randomNum * 100 - 20) + 1 )
let rangedNum = Math.floor((randomNum * 100 - 20) + 1 ) + 20);
console.log(rangedNum)