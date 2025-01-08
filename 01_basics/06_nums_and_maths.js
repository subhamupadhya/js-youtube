const score = 400
console.log(score);                         // directly declare a value 


const balance = new Number(100)
console.log(balance);                         // definetly print into number


console.log(balance.toString().length);             // with the help of toString it will convert into string
   // with the length canmeasure the length of the given input like 100 so length is 3.
    
console.log(balance.toFixed(2));                  // with the help of tofixed after value it will add zero
// like 100.00 mainly it is used in calculation of gst and bigger eccomerce projects 


const otherNumber = 100.567                       // with the help of precision we get precised values 
console.log(otherNumber.toPrecision(3));       // and have to select precison value b/w (o to 21)


//const hundreds = 10000000                        // with the help of this .toLocaleString we can precise the
//console.log(hundreds.toLocaleString());         // given values with commos. mainly this is based on us based

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));    // with the help of 'eN-IN' we canget indian based precisisons


                                   // MATHS///////

console.log(Math);               

console.log(Math.abs(-4));         // with the help of abs we get absolute value mainly it converts -ve value to +value only.

console.log(Math.round(100.675));     //round gives round value 

console.log(Math.ceil(4.2));        // ceil always gives higher values like if 4.2 output will 5.

console.log(Math.floor(4.9));     // floor always gives lower value like 4.9 output will 4.

console.log(Math.min(4, 5, 10, 111));     // min gives minimum value in given array 

console.log(Math.max(100, 333, 0. -123));   // max always gives maximum value in given array 

console.log(Math.random());              // random gives values between o to 1 and always random value. 

console.log(Math.random * 10 + 1);              // This assures that values are atleast 1 & more than 1

console.log((Math.random() * 10) + 1);           // To avoid any BODMAS rule miscalculation

console.log(Math.floor(Math.random() * 10) + 1);      // it gives min value 

//---- Trick to randomize value between range ----

const min = 10                   // it represents min value is 10 and maximumvalue is 50.
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min )      // now it gives always values in range 