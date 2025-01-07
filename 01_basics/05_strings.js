//                                           STRINGS 
const name = "subham"
const repocount = 666

console.log(name + repocount + "value");                   // it's not a right way toindicate

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);      // right way 

const gameName =  new String(`subham`)

console.log(gameName[0]);                      // to find the position

console.log(gameName.__proto__);               // to find {}


console.log(gameName.length);                  // to find length


console.log(gameName.toUpperCase());           // convert into uppercase letter  


console.log(gameName.charAt(2));               // to find the chharacter at which no


console.log(gameName.indexOf('b'));            // to find the number at character which place 


const newString = gameName.substring(0, 4)
console.log(newString);                         //  // to divide the string // (0 to 4) range between o to 4


const anotherString = gameName.slice(-6, 3)
console.log(anotherString);                                  // through slice we can orint negative values


const newStringOne = "    subham     " 
console.log(newStringOne);                                    // trim remove starting and ending space
console.log(newStringOne.trim());


const url = "https://subhamupadhya.com%20.upadhya"
             //                                             // through this replace keyword we can replace into given link
console.log(url.replace('%20' , '--'));


console.log(url.includes('subham'));                 // through includes we can check into the given word is present or not in given keyboard.


console.log(gameName.split('-'));                // it divides into parts through split