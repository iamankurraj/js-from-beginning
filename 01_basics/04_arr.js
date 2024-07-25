let myArray = [1,2,3,4,5,6]
// console.log(myArray)
myArray.push(9)
myArray.push(10)
myArray.pop()
// console.log(myArray)

//let myArr = myArray.join()      //turns array to string

myn1 = myArray.slice(1,3)       //does not affect original array
console.log(myArray)
console.log(myn1)
console.log(myArray)

myn2 = myArray.splice(1,4)      //removes the selected part from original array and stores in new assgined array
console.log(myn2)
console.log(myArray)




