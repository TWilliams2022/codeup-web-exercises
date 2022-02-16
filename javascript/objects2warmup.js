// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console



    let person = {
        name: ['Tyreik', 'Jasmine'],
        dob: [1994,1996],
        occupation: ['Coding student','College student'],

    };
console.log(person)
    console.log(person.name[0] + ' was born in the year of ' + person.dob[0] + ' and is currently a student of CodeUp!')

//to name all people in names
// person.name.forEach((name)) =>{
//     console.log(name)
// }

//if i wanted a new person what would i add

let person2 = Object.create(person);
person2['names'] = ['ry','sutton'];
person2['occupation'] = 'fab father';
person2.dob = '11.13.1994';
console.log(person2)


//will show this bday beneath & names with occupations
person2.dob = '11.14.1994'
console.log(person2)


let person3 = person; //is not a new object just assigned to the original person
console.log(person3)
person3.dob = 'nonsense';
console.log(person3) //shows person 3 dob as nonsense which shows all person and occupation in person
console.log(person) // shows nonsense aswell


/*Create an object representing a person’s contact info. It should have:
    phone number
street address
state
postal code
email address
Hard code some values in that object, then log it and its properties to the console */

var contactInfo = [
    {
        phone: ['803.387.1956'],
        street: 'james street',
        city:'Columbia',
        state: 'SC',
         zip: '29063',
        email: 'tyreik14@gmail.com',

}

        /*  use this for contact info
        ..called object mapping
        ..define contactinfo object */

    function contactInfo(phone,street,city,state,zip,email){
        this.phone = phone; //this only work in person function here
        this.street = street;
        this.city = city;
        this.state = state; //this only work in person function here
        this.zip = zip;
        this.email = email;
    }

    /*constructor function uses this.
    ..use this for contact info
   .. define person object */

    function person(name, occupation, dob){
        this.name = name; //this only work in person function here
        this.dob = dob;
        this.occupation = occupation;
    }

    //making a new person object instance (by invoking the constructor
    //everything added into the person function which attached to the person like this contact info added in using *new*

    let person2 = new person (name,occupation, dob, new contactInfo('803.387.1956','james street','Columbia','SC','29063','tyreik14@gmail.com'));

    console.log(person2);
*******************************************************************************************************************************************************

// //add property to original code
// person[contactInfo] = contactInfo;
// console.log(person) //add contactinfo to the persons



// let person3 = new person(); //can have newer values as long as using dob name occupation
//
//     console.log('Tyreik you email is: ' + contactInfo.email + " and you live on " + contactInfo.street + ", your phone # is " + contactInfo.phone);

//make up top work a function

console.log(contactInfo.street);
console.log(contactInfo.city + ", " contactInfo.state + ", " contactInfo.zip);



*******************************************************************************************************************************************************
//study this!!!!!

// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor) functions are objects *person is a object* *person2 is a object*
let person2 = new Person(
    ["Casey", "J", "Edwards"],
    "Cat Herder / Firefighter",
    "11.30.1989",
    new ContactInfo(
        '123.456.7890',
        '123 Anywhere Ln',
        'Beverly Hills',
        'CA',
        '90210',
        'nope@no-no-no.no'));

console.log(person2.contactInfo.emailAddress);
