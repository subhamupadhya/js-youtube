/*
JavaScript is dynamically typed, meaning that the type of a variable is assigned at runtime based on the variable's value.
This means that you don't need to specify the type of a variable when you declare it

DATA TYPES:-
1. Primitive datatypes
2. non primitive datatypes

1. PRIMITIVE DATATYPES
Mainly it is 7 types:-
string, number, boolean, undefined, null, symbol, bigInt.

*/
const score = 100
const scoreValue = 100.3          // mainly in javascript, float are not there all numbers are in number

const isLoggedIn = false
const outsidetemp = null
let userEmail;        // undefined values

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===  anotherId);

const bigNumber = 2376135813n

//2. NON-PRIMITIVE DATATYPES
//array, object, function 

const heros = ["viratkohli", "subham"]

let myobj = {
   // name : subham,
    age : 20,
}

const myFunction = function() {
    console.log("hello world");
}

// to find the type
console.log(typeof bigNumber);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



//                                 LECTURE-10
//                               *****MEMORY******
//                               1. stack memory (primitive)
 //                              2. heap memory  (non primitive)

let myYoutubename = "subhamupadhya"
let anothername = myYoutubename
anothername = "shivani"

console.log(myYoutubename); 
console.log(anothername);

let userOne = {
    email: "subhamupadhya53100@gmail.com",
//    upi : iybl         
}

let userTwo = userOne
userTwo.email = "shivani@53100gmail.com"
console.log(userOne.email);
console.log(userTwo.email);