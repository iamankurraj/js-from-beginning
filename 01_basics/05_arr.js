const fruits = ['apple', 'orange', 'mango', 'banana']

const veggies = ['garlic', 'potato', 'yam']

//fruits.push(veggies)    //passes another string as arguement and joins whole array inside another array

//const allFruVeg = fruits.concat(veggies)    //return new array with all elements from boths arrays in one array tho not very effcient way to do

const allFruVeg = [...fruits,...veggies]  //spread operator, very efficient way to combine arrays
console.log(allFruVeg)

const anotherArray = [1,2,3, [4,5,6],[7, [8,9,10]]]

const realAnotherArray = anotherArray.flat(Infinity)    //turns all recursive arrays into a single array
console.log(anotherArray)
console.log(realAnotherArray)




console.log(Array.isArray("ankur"))
console.log(Array.from("Ankur"))
console.log(Array.from({name:"Ankur"})) //return empty array becuz this needs specification of parameter either "key" or 