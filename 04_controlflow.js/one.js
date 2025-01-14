// control flow:-
// whole code should be run on conditional base if you are login code should run different if tou are logout code should run different that is known as control flow.

//  = it means => operator assignment
//  == it means => to cehck equal or not
// === it means => strick equal to check types also like it is string or not

// if
const temperature = 41

if(temperature === 40) {
    console.log("less than 50")
} else {
    console.log("temperature is greater than 50")
}
console.log("execute")

// <, >, <=, >=, ==, !=, ===, !==

// # scope:-

const score = 200
if(score >100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}                                                  // mainly the conecpt of var,  let, const

console.log(`user power: ${power}`);

// implicit scope:-
const balance = 1000                                  // we can also code another line in this after need to write , in last
if (balance > 500) console.log("test")

// multiple statements:-
if(balance < 500) {
    console.log("less than 500");
} else if(balance < 750) {
    console.log("less than 750")
} else if( balance < 900) {
    console.log("less than 750")
} else {
    console.log(" less than 1200");
}

// multiple condition combined
const userLoggedIn= true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3) {
    console.log("allow to buy courses");
}
if( loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}