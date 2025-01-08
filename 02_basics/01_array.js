// Array  
 /*
Array is written in brackets [  ].
Array data type is an object.
Array can contain different data types . i.e string,number,boolean,array etc.
Array is zero based indexing. It starts with zero.
Once changed its original value will also change beacause it is non primitive (refrence) type. */

const myArr = [0, 1, 2, 3, 4, 5]          // to declare array
const myHeros = ["virat","subham","all"]

const myArr2 = new Array( 1, 2, 3, 4, 5)      // can also declare like this not need to use square brackets it will automatically converts 
console.log(myArr[1]);


// Array Methods
myArr.push(6) 
myArr.push(7)                  // Push = adds value to last of an array.
myArr.pop()                   //  Pop = removes last value of an array.
//console.log(myArr);

myArr.unshift(9)                    // Unshift = adds value at first of an array.
//console.log(myArr)

myArr.shift()                        //Shift = removes first value of an array.

console.log(myArr.includes(9))              //   Includes = checks true or false. given value is in array or not

console.log(myArr.indexOf(9));     //IndexOf = checks the position of value in number form.
                                   //if value is not in array ouput will -1.
//console.log(myArr);

const newArr = myArr.join()
console.log(myArr);                       // Join = converts to string.
console.log(newArr);


// slice, splice

//Slice(value to remove from,value remove upto but don't include)= returns new array and original value
//  remains unchanged. Use when you need to extract a portion of an array without modifying it.

//Splice(value to delete from, number of value to delete) = returns new array with deleted one and original 
// value changed.Use when you need to add, remove, or replace elements within an array.


console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
