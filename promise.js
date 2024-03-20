//CodeWithHarry-https://www.youtube.com/watch?v=Dadlf6YsTHA&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=54

//-------------------------------------Intro to Promises----------------------------------------------------------

// 1. setTimeout is a function that takes a callback function and a time in milliseconds as an argument.
// 2. The callback function is called after the time has passed.
// 3. A callback function is a function that is passed as an argument to another function.
/*
let promise = new Promise(function(resolve,reject){
    alert("Promise is created")
    resolve("Promise is resolved")
})

console.log("Hello-1");

setTimeout(()=>{
    console.log("Hello-3 in 2 sec")},2000)

const hello = setTimeout(() => {
    return ("Hello-4 in 5 sec")},5000);

console.log("Hello-2");
console.log(hello);
console.log(promise);
*/

//-------------------------------------Promises .then() and .catch()-------------------------------------------
/*
let p1 = new Promise((resolve, reject) =>{ //Promise ya tho resolve hogi ya reject kar de jayge
    console.log("Promise p1 is Pending")
    setTimeout(()=>{
        // console.log("I am promise p1 and I am resolved")
        resolve(true)  // Resolve hogi to tho ek value degi        
    },2000)
})

let p2 = new Promise((resolve, reject) =>{ 
    console.log("Promise p2 is Pending")
    setTimeout(()=>{
        // console.log("I am promise p2 and I am rejected")
        reject(new Error("I am an error")); // Reject hogi tho ek error degi
    },2000)
})
// To get value
p1.then((value)=>{
    console.log(value)
})
// To catch error
// p2.catch((error)=>{
//     console.log("Some error occurred in p2")
// })
//OR
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("Some error occurred in p2")
})


console.log(p1,p2);

*/

//-------------------------------------Promises chaining .then() calls-------------------------------------------
/*
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            console.log("Resolved after 3 sec")
            resolve(true)
    },5000)
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=> {resolve("Promise 2")},1000) 
    })
    return p2
}).then((value)=>{
    console.log("We are done")
    return 2;  // Esko promise me convert kar dia jaayga
}).then((value)=>{
    console.log("Pakka Done")
})

console.log(p1);
*/
/*
const loadscript = (src)=> {
    return new Promise((resolve,reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded")
        }
        script.onerror = () => {
            reject("Some error occurred")
        }
    })
}

let src = loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
src.then((value)=>{
    console.log("First Script has been loaded")
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js")
}).then((value) => {
    console.log("Second Script has been loaded")
}).catch((error)=>{
    console.log("Some error occurred in p2")
})
*/