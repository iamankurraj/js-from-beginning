const userId = 1234
let accEmail = "this@gmail.com"
var accPassword = "12344"
accountCity = "Pune"


/*
Prefer not to use var keyword
Because of issue in block scope and functional scope

*/

// userId=122
accEmail="that@gmail.com"
accPassword="1233444"
accountCity="pune-city"
console.log(userId);
console.table([userId, accEmail, accPassword, accountCity])


