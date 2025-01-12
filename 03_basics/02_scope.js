//let a = 10
const b = 20
var c = 30000
 // {}      scope
//console.log(a);
//console.log(b);
//console.log(c);

var c = 30000
// block scope
if(true) {
let a = 10                         // var will not use 
const b = 20
var c = 30
}
console.log(c);

// global scope :- those values are in under not go to outside

let a = 3000
if(true) {
    let a = 10
    const b = 20            // if console.log iss{under in function then value will print always inside the function}
    //console.log("INNER: ", a);
}
//console.log("INNER: ", a);    // if console.log is outside the function it will print outside value always 

// global scope will differnt at console or code environment


// SCOPE LEVEL AND MINI HOSTING


// nested function
// in this function child function can acess parent function vaiables.

function one(){
    const username = "subham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
//one()


// in if statement nested scope
if(true) {
    const username = "subham"
    if(username === "subham") {
        const website = "youtube"
        console.log(username + website);
    }
}


// ++++++++++++++++++++ interseting +++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num) {
    return num + 1
}

addTwo(5)                        // error will show because we initialise before the function
const addTwo = function(num) {
    return num +2
}
