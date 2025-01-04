const accountId = 144553
let accountEmail = "subhamupadhya53100@gmail.com"
var accountpassword = "12345"
accountCity = "Jaipur"


// accountId = 2    // not allowed

accountEmail = "hc@hc.com"
accountpassword = "232425"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity])