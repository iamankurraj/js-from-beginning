nums = [1,2,3,4,5,6,7,8,9,10]

const result = nums.map((num)=>(nums+10))

// console.log(result)

const result1 = nums.map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=31)
console.log(result1)

