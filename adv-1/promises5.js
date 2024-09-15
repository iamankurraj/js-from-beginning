const promise5 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"pizza", topping:"pineapple"})
        }else{
            reject('something went wrong')
        }
    },2000)
})
async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// we use try and catch block to cath the error in case the promise is rejected
consumePromiseFive()