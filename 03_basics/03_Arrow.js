// when we refer current context then we used "this" keyword.
const user = {
    username: "subham",
    price: 999,

    welcomeMessage: function() {
      console.log(`${this.username}, welcome to website`);
      //console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this); //when we are in node environment then our this refer empty environment
// browser k under jo object hai wo window object hai.


function chai() {
  let username = "subham."
  console.log(this.username);
}
chai()

const chai = function () {
  let username = "subham"
  console.log(this.username);
}
chai()

const chai = () => {      //arrow function
  let username = "subham"
  console.log(this.username);
}
chai()

// explicit return it means we have to use explictly return keyword

//const addTwo = (num1, num2) => {
  return num1 + num2
//}
console.log(addTwo(3, 4));


// implicit return:-
//when we used { } curley bracket then we have to use return and if we use ( ) paranthesis then we don't need to use return

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3,4));