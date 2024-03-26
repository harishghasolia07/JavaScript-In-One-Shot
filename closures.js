function init() {
    var name = "Mozilla"; //--> name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); //--> use variable declared in the parent function
    }
    name = "Mozilla-2";
    return displayName;
  }
  let c = init();
  c();
 
//Example-2

function returnFunc(){ //--> Closure ko access hota hai apne outer function ke scope ka bhe
    const x = () => {
        let a = 10;
        console.log(a);
        const y = () => {
            // let a = 20;
            console.log(a); //--> function y is not having variable "a" so it will look for a in its parent function
            const z = () => {
                // let a = 30;
                console.log(a);
            };
            z();
        };
        a=999;
        y();
    };
    return x;
}

let c1 = returnFunc()
c1()


