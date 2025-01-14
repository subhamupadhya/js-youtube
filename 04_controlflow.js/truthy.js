const userEmail = "subham@ibl"
if(userEmail) {
    console.log("got user email");
} else{
    console.log("don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}


// to check array is empty:-
// const userEmail = []
if(userEmail.length === 0) {
    console.log("array is empty");
}

// to check object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}



// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15                // different different scenarions
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")