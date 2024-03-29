//Q.1
let fun = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
     }
);
}

(async () => {
           let fun1 = await fun('Hello')
           console.log(fun1)
           let fun2 = await fun('World')
           console.log(fun2)
})();


(() => {
    console.log('Ok');
})();


//Q.2

function sum(a,b,c) {
    return a+b+c;
}
let x = [1,2,3];
console.log(sum(...x));

//Q.3
const fun1 = async(text,n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000*n);
    });
}
(async () => {
    let fun1 = await fun("Resolving Promise in 1 Second",2)
    console.log(fun1)
})();