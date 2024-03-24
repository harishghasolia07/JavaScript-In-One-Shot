/*
const loadScript = async(src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src  = src; 
        document.body.append(script);                 
        script.onload = () => resolve("Promise Resolved : "+src);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        
    })
}

let b = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');

//Q.1

b.then((value)=>{
    console.log(value);
})

//Q.2

const fun = async () => {
    console.log(new Date().getSeconds());
    let result = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
    console.log(new Date().getSeconds());
    console.log(result);
}
fun();
*/

//Q.3
/*
let fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise Rejected")
        }, 3000)
        
    })
}

let b = fun();
b.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})

//OR
let b = async () => {
    try{
        let c = await fun()
        console.log(c);
    }
    catch(e){
        console.log(e);
    }
}

b();
*/

//Q.4

/*
let p1 = async()=>{ 
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // reject("Some error occured there")
                resolve(1)
            },5000)
})
}
let p2 = async()=>{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // reject("Some error occured there")
                resolve(2)
            },3000)
})
}
let p3 = async()=>{ 
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // reject("Some error occured there")
                resolve(3)
            },1000)
})
}

const run = async () => {
    // console.time('run')
    // let a = await p1()
    // let b = await p2()
    // let c = await p3()
    // console.log(a,b,c)
    // console.timeEnd('run')  --> 9.006ms

    //More effecient way to run the promises in parallel to reduce the time-->
    console.time('run')
    let a = p1()
    let b = p2()
    let c = p3()
    let abc = await Promise.all([a,b,c])
    console.log(abc)
    console.timeEnd('run') //--> 5.006ms
}
run();
*/
