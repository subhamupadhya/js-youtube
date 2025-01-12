// function:- 
// to print so many packages in one box known as function
// when we made function defination and take an input value that is known as parameter
// when we call the function and passes the value that is known as arguments

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}
//sayMyName()


// add  two function
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)


function addTwoNumbers(number1 , number2){
 let result = number1 + number2
return result                    //return likhne k bad koi bhi function kam hi nahi karta hai
}

const result = addTwoNumbers(3, 5)
//return number1 + number2
//addTwoNumbers(3, "5")        //output will be 35 it will if one is string another will also string


    function loginUserMessage(username) {
        return `${username} jsut logged in`
    }
console.log(loginUserMessage("subham"));


 
function loginUserMessage(username) {
    if(username=== undefined) {
        console.log("please enter a username");
        return
    }
     return `${username} jsut logged in`
}
//console.log(loginUserMessage())


// FUNCTION WITH OBJECTS AND ARRAY

//for single values
function calculatecartprice(num1) {
    return num1
}
console.log(calculatecartprice(2))

// with multiple values used ...rest operator

function calculatecartprice(...num1) {
    return num1
}                                                         // it will convert all values into an array 
console.log(calculatecartprice(200,400,2000));


function calculatecartprice(val1, val2, ...num1) {
    return num1
}                                                     // first two values will take val1, val2 rest will print
console.log(calculatecartprice(200,400,600,60));


// object to function

const user = {
    username: "subham",
    prices: 199
}

function handleobject(anyobject) {
    console.log(`any: name is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)  // through this pass we also have another option
handleobject({
    username: "sam",
    price: 399          //another way to pass the objects
})


// array to function

const mynewArray = [200, 400, 600, 100, 60]

function returnSecondValue(getArray) {
    return getArray[1] 
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue ([200, 400, 500, 1000]));        // can also print