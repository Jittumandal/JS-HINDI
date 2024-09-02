const name = "Mandal"
const repCount = 80

// console.log(name +   repCount +   "value")  // this is old javascript concept 
// console.log(`my name is ${name} and repocount value is ${repCount}`) // this is advance ECMA Script concept this is best programing 


// ye wala ek new tarika hai strign difined karne ka 
const gameName = new String ('Mandal')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('M'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));