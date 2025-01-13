// immediately invoked function expressions (IIFE)

// global scope k variables ya declaration ko hatane k liye iife k use karte h


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);

}) ('subham')