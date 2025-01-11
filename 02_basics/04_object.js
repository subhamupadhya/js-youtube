//const tinderUser = new Object()        // it's a singelton object

//const tinderUser ={}        // not singelton object

const tinderUser ={}
tinderUser.id = "123abc"             //to acess the objects
tinderUser.name = "Sammay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//**
//to acess the objects in objects with. dot
const regularUser = {                         
    email : "subhamupadhya53100@google.com",
    fullname: {
        userfullname: {
            firstname: "subham",
            lastname: "upadhya",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


// merge object to object

const obj1 = {1: "a", 2:"b"}               // with the help of assign key we can merge the object
const obj2 = {3: "a", 4: "b"}              //object.assign
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2, obj3}            //way to merge object but some issue in merging one object into another object

//const obj4 = Object.assign(obj1, obj2, obj3)   // with the help of assign key we can merge the object

const obj4 = {...obj1, ...obj2, ...obj3}      // mainly we are merging through spread operator
console.log(obj4);


// if in array so many objects and if we have to print any values or loops
const users = [
    {
        id: 1,
        email: "subh@google.com"
    },
    {
        id: 1,
        email: "subh@google.com"
    },
    {
        id: 1,
        email: "subh@google.com"
    },
    {
        id: 1,
        email: "subh@google.com"
    },
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // we put all the keys into an array now we can run loops
console.log(Object.values(tinderUser)); // through this can find values
console.log(Object.entries(tinderUser));   // with the help of entries we can get for every value
//  a special array it menas in array or an array

// to check the availability of property
console.log(tinderUser.hasOwnproperty('isLoggedIn')); 



// next lecture:==
// OBJECT DE-STRUCTURE AND JSON API

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "subham upadhya"
}

//console.log(course.courseInstructor);       // to acess the courseinstructor value

//also can aceess:--
const{courseInstructor} = course
console.log(courseInstructor);

//de-structure of object:- doing only in {}
// mainly we can put another name instead of that :
const{courseInstructor: Instructor} = course
console.log(Instructor);

// json:- key is also string and their output is also string
{
   // "name": "subham",
   // "coursename": "js in hindi"
   // "price" : "free"
}

// in array also json:-
[
    {},
    {},
    {},
]