Notes:-

Variables - var, let, const-->
var is globally scoped
let is block scoped
const is block scoped and cannot be reassigned

Data Types-->
Primitive Data Types:- String, Number, Boolean, Null, Undefined
Reference Data Types:- Arrays, Object Literals, Functions, Dates, Anything Else

Arrays-->
In JavaScript arrays can have multiple data types in them but in other languages like Java,
C++ etc. arrays can only have one data type in them.

Higher Order Array Methods-->
forEach, map, filter, reduce

ForEach - Loops through the array and does something with each item
Map - Creates a new array from the results of a function that returns true or false for each item in the array 
Filter - Creates a new array from the results of a function that returns true or false for each item in the array
Reduce - Reduce down to a single value (e.g. adding all the numbers in an array)

Difference between map and forEach-->
map returns a new array.
forEach does not return anything and just loops through the existing array elements.

-------------------------------------------------------------------------------------------------------------

Arrow Functions-->

const functionName = () => {
    // Code
};

Anonymus Function-->

<button onclick={() => {
     console.log('Click');
    }}
></button>;


----------------------------------------Matches,Closest Contains-------------------------------------------

These are the methods for searching the elements in the DOM.
Matches--> It is used to check the element is matching with the given css selector or not.
Closest--> It is used to find the closest parent element of the given css selector.

----------------------------------------Callback And Problems in this--------------------------------------

There is two problems is callback() -->
    1. callback hell
    2. pyramid of doom
  -->Solution of this problem is Promise.

------------------------------------------Promises---------------------------------------------------------
