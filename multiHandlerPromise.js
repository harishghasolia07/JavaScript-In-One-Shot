/*
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },2000)
})

p1.then(()=>{
    console.log("Congrats Promise resolved!")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(5)
        },5000)
    })
}).then((value)=>{
    console.log(value)
})
p1.then(()=>{
    console.log("Hurray") 
})
*/

//IMP NOTE: This is different from the promise chaining.In promise chaining we return the promise
//after first once execution is done and use its value to execute the next one.