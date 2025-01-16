// for in 
// in this loop we can't acess value
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    console.log('${key} shortcut is for ${myObject[key]}');
    }


// through array
const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    console.log(programming[key]);
}


// we can't exprees expression on nap

const map = new Map()
map.set('IN', "India")
map.set('Gr', "Germany")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map) {
    console.log(key);
}