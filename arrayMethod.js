//Map--> Creates a new array from the results of a function that returns true or false for each item in the array
let arr = [1,2,3,10,20,30]

let a = arr.map((value,index)=>{
    // console.log(value,index)
    return value+index
})

// console.log(a)
//console.log(arr) //-->These methods do not change the original array

//Filter--> Creates a new array from the results of a function that returns true or false for each item in the array
let arr1 = [1,2,3,10,20,30]

let a1 = arr1.filter((value)=>{
    return value>10 
})

// console.log(a1)
// console.log(arr1) 

//Reduce--> Reduce down to a single value (e.g. adding all the numbers in an array)
let arr3 = [1,2,3,10,20,30]

let a3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
//OR

let reduce_function = (h1,h2)=>{
    return h1+h2
}
let a4 = arr3.reduce(reduce_function)

// console.log(a3)
// console.log(a4)

