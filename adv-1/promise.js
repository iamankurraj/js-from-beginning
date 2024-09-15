//2nd promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        //console.log("async task 1");
        resolve()
      
},1000)
}).then(function(){
    //console.log("async resolved");
})

//3rd promise

const promiseThree =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"pizza", topping:"pineapple"})
    },1000)
})
promiseThree.then((user)=>{
    //console.log(user);
})

//4th promise
promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"pizza",toppings:"pineapple"})
        }else{
            reject({username:"no pizza",toppings:"no topping"})
            // we can pass any error message here
            // or when am putting my on default object it is actually accessible 
            //check later whether thats good practice
        }
            },2000)
})
// username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
//we cannot assign it to any variable

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username); 
})
.catch(function(error){
    console.log(error);
    return error.username
})
.then(function(username){
    console.log(username)
})
.finally(()=>console.log('promise is resolved or rejected.'))