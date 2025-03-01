const coding = ["js", "ruby", "python", "c++"]

coding.forEach( function (val) {
    console.log(val);
} )

// arrow function
coding.forEach( (item) => {
    console.log(item);
})

// simply print
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)



coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const mycoding = [
    {
        languageName:"javascript",
        languageFileName: "js",
    },
    {
        languageName:"java",
        languageFileName: "java",
    },
    {
        languageName:"python",
        languageFileName: "py",
    },
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})