const score = 500
// console.log(score)

const blance = new Number(500) // type bhi btata hai ki unmber hai 

// console.log(blance)
// console.log(blance.toString().length)

const otherNumber = 123.3444908

// console.log(otherNumber.toPrecision(3))

const hundred = 1000000

// console.log(hundred.toLocaleString()) // usr rull ke tara hai
// console.log(hundred.toLocaleString('en-IN')) //india rull ke anushar hai print karta hai



// +++++++++++++++++++++ Math Concept +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(4))
// console.log(Math.round(4.4))
// console.log(Math.round(4.5)) // rounnd value me 5 hai 1 add kar dega 5 se under hai to fiexied cvalue print karega
// console.log(Math.ceil(4.1)) // all time 1 add kar deta hai
// console.log(Math.floor(3.5)) // floor value me kanbhi nahi add hota hai value jo ho print karega
// console.log(Math.min(4, 6, 3, 8))
// console.log(Math.max(4, 8, 9, 10, 20))

console.log(Math.random())
console.log((Math.random()*10 )+ 1)
console.log(Math.floor(Math.random()*10) + 1);



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// class number 12