// for of

["", "", ""]
[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
    
// Maps
// the map object holds key-values pairs and remembers the originl insertion order of the keys
const map = new Map()
map.set('IN', "India")
map.set('Gr', "Germany")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);







