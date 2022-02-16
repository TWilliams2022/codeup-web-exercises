"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

// let person = {
//     firstName: 'Tyreik',
//     lastName: 'Williams',
// }
// or


let person = {};
console.log(typeof person)

person.firstName = 'Tyreik';
console.log(person)

person.lastName = 'Williams';
console.log(person)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = 'Hello';
    console.log(person)
    console.log(person.sayHello + ' ' + person.firstName + ' ' + person.lastName);

    // or
    // can use this. in replace of person which is the object
person.sayHello = function (){
    console.log('Hello' + ' ' + person.firstName + ' ' + person.lastName);
}
person.sayHello();


/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

 // var shoppers = [
 //        {name: 'Cameron', amount: 180},
 //        {name: 'Ryan', amount: 250},
 //        {name: 'George', amount: 320}
 //  ];

//  shopper.foreach(function ())
// {
//     if (shopper.amount > 200) {
//         let discount = shopper.amount * .12;
//         let amountAfterDiscount = shopper.amount - discount
//         console.log(shopper.name + " your discount was $" + discount)
//     } else {
//         console.log(shopper.name + " Your total is "
//         shopper.amount
//     )
//         ;
//     }
// }

// or

// function applyingDiscount(){
//     let discount = 0;
//     let newTotal = 0;
//     shoppers.forEach((i)=>{
//         if(i.amount > 200){
//             discount = (i.amount * 12) / 100;
//             newTotal = i.amount - discount;
//             console.log("your discount was $" + discount);
//             console.log("your new total is $" + newTotal);
//         }
//     })
//
// }
// applyingDiscount();

//or



/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var books = [
    {
        Title: 'My Home',
        author.firstName: 'James',
    author.lastName: 'Benedict',

    },
    {
        Title: 'jellyfish story',
            author.firstName: 'Steve',

        // rewrite all to look like below
        author: {
            firstName: 'Steve',
            lastName
    }: 'Farrow',
    },
{
    Title: 'Bones',
        author.firstName: 'John',
    author.lastName: 'Deere',

},
{
    Title: 'Whales',
        author.firstName: 'Rob',
    author.lastName: 'Stanton',
},
{
        Title: 'WALL STREET',
            author.firstName: 'Jimmie',
    author.lastName: 'Williams',

    },
];




/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */

books.forEach(function (book , index)){
    console.log("Book # " + (index + 1));
    console.log("title " + book.title);
    console.log('Author ' + book.author.firstName + book.author.lastName);

}

/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */

function createBook(title,author) {
let authorsplit = authorName.split(' ');
    return {
        title: title,
        author: {
            firstName: authorNameSplit[0],
            lastName: authorNameSplit[1]
        }
    }

