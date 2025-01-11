// to declare objects mainly two ways : 1.literals  2.constructor
// with the constructor always made singelton not through literals

// object literals:  way to declare objects 

const mySym = Symbol("key1")

 const JsUser = {
    name: "subham",
    "full name": "subham kumar",  // to print full name we must required ["full name"] to print
    [mySym]: "mykey1",             // for accesing symbol also otherwise it will show strings as not symbol
    age : 20,
    location: "muzaffarpur",
    email: "subhamupadhya53100@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mondday", "saturday"],
 }

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])

 JsUser.email = "subham@chatgpt.com" // to change the values

 //Object.freeze(JsUser)   // for freeze the values
 

 // acessing function
 JsUser.greeting = function(){
   console.log("hello js user");
 }

 console.log(JsUser.greeting());

 // to aceesing function with objects
 JsUser.greetingTwo = function(){
   console.log(`hello JS user, ${this.name,this["full name"]}`);
 }

 console.log(JsUser.greetingTwo());