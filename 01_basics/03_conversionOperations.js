let score = "true"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" =  33
// "33abc" = nan
// true = 1; false = 0

//let isLoggedIn = " "
let isLoggedIn = 1
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// 1 = true ,  0 = false
// "" = false
// "subham " = true

// conversion into string :- 
let someNumber = 33;

let stringNumber = String(someNumber); 
console.log(stringNumber); 
console.log(typeof stringNumber); 


//                   ************OPERATIONS *************


let value = 3
let negvalue = -value
console.log(negvalue);

// arithemetic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%3);

let str1 = "subham"
let str2 = " upadhya"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 / 3);             // definetly use paranthesis in this condition

console.log(true);          // true
console.log(+true);         // +1
console.log(-true);         // - 1

let num1, num2 , num3
num1 = num2 = num3 = 2 + 2           // not a right way to write

let gameCounter = 100
gameCounter++;
console.log(gameCounter); 
// if it is ++ then value increased if it's negative then value decrease
//  mainly depends upon the postfix and prefix operations. 