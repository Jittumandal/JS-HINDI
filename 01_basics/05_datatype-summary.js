// //There are Two types to data 

// //  1) primative data type
// //  2) Reference (Non-primative) data type 

// //1 Parimative data type
//                 there are 7 data types

//    1 - String
//    2 - Boolean
//    3 - null
//    4 - undefined
//    5 - BigInt
//    6 - Symbol
//    7  -Number

const score = 100 // ish ka data type Number hai 
const scoreValue = 100.3 // ish ka data type Number hai 

const isLoggedIn = false // ish ka data type boolean hai 
const outsideTemp = null // ish ka data type object hai 

let userEmail; // ish ka data type undefined hai 

const id = Symbol('123') // ish ka data type Symbol hai 
const anotherId = Symbol('123') // ish ka data type Symbol hai 
// console.log(id === anotherId)

let bigNumber = 242642745265472417654n // ish ka data type biginit hai 

// important note

// kishbhi value ya kishbhi chij ka data  types kaise pata kare or ye yad rakhne wala bat hai
//    console.log(typeof userEmail)


//    //2 Reference ( Non-Parimative) data type
//            there are 3 data types

//    1 - Array
//    2 - Object
//    3 - function        

const myArray = ['jitensra', 'kumar', 'mnadal']

let myObj = {
   name: 'jitendra',
   age: 23,
   class: 'MCA'
}
// ish ka data type object hai 

const myFunction = function () {
   console.log("MOST WELCOME TO OUR FUNCTIONN PROGAGAM")
}

//  myFunction()

// ish ka data type object function hai 

// important note

// kishbhi value ya kishbhi chij ka data  types kaise pata kare or ye yad rakhne wala bat hai
// console.log(typeof myFunction)




// javascript is static type or dynamic 
// dynamic language
// JavaScript is a dynamic language and not static, 
// which means that variables can hold values of different types during runtime


// What is memory in JavaScript? :-  JavaScript engines store their data in two places; the Stack Memory and the Heap Memory
// There are two types of memory 
//***************************/ 1 - Stack Memory (Primitive) :- . Stack Memory - Static Memory allocation: is a type of data structure that uses the Last-in-First-out (LIFO) manner, to store static data.
//***************************/ 2 - Heap Memory  (Non-Primitive)
// for example

let MybesiteName = "Artadjust"
let anotherNmae =  MybesiteName
 anotherNmae = "newartadjust"

console.log(MybesiteName);
console.log(anotherNmae);

// ye ha per stack ka rull aply hota ho stack me copy hota hai data 

let userOne = {
   name:'jitendra',
   age:56
}
// ye ha per heap ka rull aply hota ho heap me single data hota ho changed hota hai

let userTwo = userOne;

userTwo.name = "mandal"

console.log(userOne.name)
console.log(userTwo.name)