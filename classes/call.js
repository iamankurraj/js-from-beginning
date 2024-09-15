function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    // SetUsername(username) ----------> this doesnt do actual call/ ye call nahi ho rha h
    //     -----------> this.username = username (it isnt set, because we have outsourced it to setusername)
    // -------> when we use (.call) only reference comes but its not held, it disappears as it is executed--->we use (this) tp hold the reference 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);