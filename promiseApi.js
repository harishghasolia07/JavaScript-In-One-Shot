/*
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Some error occured there")
        resolve("Value-1")
    },2000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value-2")
        // reject("Some error occured there")
    },3000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value-3")
    },4000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// Promise.all(promise)---> It will wait for all the promises to be resolved and then only it will return the value

let promise_all1 = Promise.all([p1,p2,p3])

promise_all1.then((value)=>{
    console.log(value)
})

// Promise.allSettled(promise)---> If any of the promise is rejected then also it will return the value of the resolved promises
let promise_all2 = Promise.allSettled([p1,p2,p3])

promise_all2.then((value)=>{
    console.log(value)
})

// Promise.race(promise)---> It will return the value of the first resolved promise
let promise_all3 = Promise.race([p1,p2,p3])

promise_all3.then((value)=>{
    console.log(value)
})

// Promise.any(promise)---> If there is any rejected promise which have less timeout then it will return the value of the next resolved promise
let promise_all4 = Promise.any([p1,p2,p3])

promise_all4.then((value)=>{
    console.log(value)
})
*/