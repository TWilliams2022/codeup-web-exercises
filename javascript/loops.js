// 8 to 50

/*let num = 8;

while (num <=50 ){
    console.log(num++);
}
console.log('THE LOOP HAS ENDED!'); */

//using same example input odd numbers 8-50
/*let num = 8;

while (num <=50 ){
    if(num % 2 === 1){
        console.log(num)
    }
    num++;
}
console.log('THE LOOP HAS ENDED!'); */

//using same example input even numbers 8-50
/*let num = 8;

while (num <=50 ){
    if(num % 2 === 0){
        console.log(num)
    }
    num++;
}
console.log('THE LOOP HAS ENDED!');*/

let fullNameEnter = false;
let name = "";
while (!fullNameEnter) {
    fullNameEnter++;
    name += " " + prompt ("Please enter your name:");
    fullNameEnter = confirm("Is this your full name:" + name);

}
alert("Your full name is " + name);