// function loadScript(src,callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.body.append(script);
//   script.onload = function(){ // For check script has loaded or not.
//     console.log("SRC:"+src)
// //    callback(); 
//     callback(src); //Passing with argument.
//   }
// }
// function hello(src){
//     alert("Hello World!! "+src);
// }
// function greet(){
//     alert("Thank You!!")
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',hello)
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',greet)

//For Handling Error -->
/*
function loadScript(src,callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    script.onload = function(){ // For check script has loaded or not.
      console.log("SRC:"+src)
      callback(null,src);
    }
    script.onerror = function(){
      console.log("Error loading script with SRC: "+src)
      callback(new Error("Src got some error"))
    }
  }
  function hello(error,src){
      if(error){
          console.log(error)
          return
      }
      alert("Hello World!!"+src);
  }
  function greet(){
      alert("Thank You!!")
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',hello)
  loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',greet)


*/

/*
  Notes:-
  There is two problems is callback() -->
    1. callback hell
    2. pyramid of doom
  -->Solution of this problem is Promise.
*/
