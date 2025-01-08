// DATE AND TIME

let myDate = new Date()
console.log(myDate.toString());              // all represents date an time 
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);                      // date is object 

//let myCreatedDate = new Date(2025, 0, 16)
//console.log(myCreatedDate.toDateString());             // with  the help of twoDate string or functions we make the date readable

//let myCreateDate = new Date(2025, 0, 16, 5, 6 ,7 )
//console.log(myCreateDate.toLocaleString());             // if we increase the values it will also represent time as well

let myCreateDate = new Date("2025-01-14")
//console.log(myCreateDate.toLocaleString());             // it gives yy-mm-dd   mainly us standard 


let myTimeStamp = Date.now()        
console.log(myTimeStamp);                 // it gives time till date 

console.log(myCreateDate.getTime());               // from input to till date number 

console.log(Date.now());                // it will give now time

console.log(Date.now()/1000);                   // it will convert into seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);                          // to print date 
console.log(newDate.getFullYear());           // with this can find year 
console.log(newDate.getDay());          // find date 


newDate.toLocaleString('default', {
    weekday : "long",
})                                              // to find week day
        
