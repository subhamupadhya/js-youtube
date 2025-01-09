const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["spiderman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
// push works in existing array 
// though push can also do and also through concate


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//concat can add new array
// concat combine two or more array and give a new array

// spread also do same things

const all_new_Heros = [...marvel_heros, ...dc_heros]
console.log(all_new_Heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//returns a new array with all subarray elemets


//check this is array or not 
//from converted all strings in array directly
console.log(Array.isArray("subham"))
console.log(Array.from("subham"))


//we have to identify name otherwise it will print [] empty array 
console.log(Array.from({name: "subham"}))  //interesting case for interview


//convert these into array
// with the help of of keyword 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));