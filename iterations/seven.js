//REDUCE



nums= [1,2,3,4,5]
let acc=0;  // Accumulator value comes 1 in this case but answer is same
//check this


// const myTotal = nums.reduce(function(acc,currval){
//     console.log(`acc=${acc} currval=${currval}`);
//     return acc+currval
    
// },0)



const myTotal1 = nums.reduce((acc, currval)=>(acc+currval),0)
console.log(myTotal1);



const items = [
     { name: "Laptop", price: 800 },
     { name: "Smartphone", price: 600 },
     { name: "Headphones", price: 100 },
     { name: "Keyboard", price: 50 }
];
  
 const totalPrice = items.reduce((acc, key)=>(acc+key.price),0)
 console.log(totalPrice);
 
  