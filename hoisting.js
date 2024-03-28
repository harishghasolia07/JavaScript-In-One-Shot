console.log(c);
greet();

// console.log(d) // ReferenceError: Cannot access 'd' before initialization because let is not hoisted
// console.log(e) // ReferenceError: Cannot access 'e' before initialization because const is not hoisted

function greet() {
  console.log("Hello World");
}
// var greet = function() {  //--> Function expression and class expression are not hoisted
//     console.log('Hello World');
// }

var c = 10; //Declaration hoisted to the top but initialization is not
let d = 20;
const e = 30;
console.log(c);
console.log(d);
console.log(e);
