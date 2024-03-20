/*
Topics:-
 1. Console
 2. Data Types
 3. String Properties and Methods
 4. Arrays
 5. Object Literals
 6. Arrays of Objects
 7. Higher Order Array Methods
 8. Ternary Operator
 9. Switches
10. Functions
11. Object Oriented Programming
12. Classes
13. DOM
14. Events
15. Form
16. Objects
*/


//--------------------------------Console----------------------------------------------------------------

// console.log("Hello, World!")
// console.error("This is an error");
// console.warn("This is a warning");

// let age = 30;
// age = 31;
// console.log(age);


//--------------------------------Data Types-------------------------------------------------------------
/*
const name = "John"; //String
const age = 30; //Number
const rating = 4.5; //Number
const isCool = true; //Boolean
const x = null; //Object
const y = undefined; //Undefined
let z; //Undefined

console.log(typeof z);

*/
//--------------------------------
/*
const name = "John";
const age = 30;

//Concatenation
console.log("My name is " + name + " and I am " + age);

//Template String
console.log(`My name is ${name} and I am ${age}`);
*/

//--------------------------------String Properties and Methods-------------------------------------------
/*
const s = "Hello World!";
const r = "technology, computers, it, code";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(r.split(""));
console.log(r.split(" "));
*/


//--------------------------------Arrays - Variables that hold multiple values-----------------------------
/*
const numbers = new Array(1, 2, 3, 4, 5); //Array Constructor
const fruits = ["apples", "oranges", "pears", 10, true];

console.log(numbers);
console.log(fruits);
fruits[3] = "grapes";
fruits.push("mangos"); //Add to end
fruits.unshift("strawberries"); //Add to front
fruits.pop(); //Remove last


console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits)); //Check if array or not 
console.log(fruits.indexOf("oranges")); //Find index of value

*/


//--------------------------------Object Literals - Key value pairs-------------------------------------------
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person; //Destructuring 
console.log(city);

person.email = "xyz@gmail.com"; //Add property
console.log(person);
*/


//--------------------------------Arrays of Objects--------------------------------------------------------------
/*
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); //Convert to JSON 
console.log(todoJSON);
*/


//--------------------------------Higher Order Array Methods-------------------------------------------------------

//forEach, map, filter, reduce --> These are used to loop through arrays 

/*
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
];
//forEach 
todos.forEach(function (todo) { //here todo is a parameter 
    console.log(todo.text);
});

//map   
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

//OR
//map with arrow function
const todoText1 = todos.map((todo) => {
    return todo.text;
});
console.log(todoText1);


//filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//reduce
const todoCompleted1 = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompleted1);

const todoCompleted2 = todos.filter(function (todo) {
    return todo.isCompleted === true;
}
).map(function (todo) {
    return todo.text;
}).reduce(function (acc, todo) { //acc is the accumulator (accumulater is the value that is returned by the previous iteration)

    return acc + todo;
});
console.log(todoCompleted2);

*/

//-----------------------------------------Ternary Operator-------------------------------------------------------------------
/*
const x = 10;
const color = x > 10 ? "red" : "blue";

console.log(color);


//-----------------------------------------Switches---------------------------------------------------------------------------


switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
        break;
}
*/

//-----------------------------------------Functions---------------------------------------------------------------------------

/*
function addNums(num1 = 1, num2 = 1) { //Default values
    return num1 + num2;
}
console.log(addNums(5, 5));

const addNums1 = (num1 = 1, num2 = 1) => num1 + num2; //Arrow function

console.log(addNums1(5, 5));

//todos.forEach((todo) => console.log(todo.text)); //Arrow function

*/

//-----------------------------------------Object Oriented Programming---------------------------------------------------------
/*

//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //Date object
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.getName = function(){
    //     return `${this.firstName} ${this.lastName}`
    // }
}

//Prototype methods
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getName = function () {
    return `${this.firstName} ${this.lastName}`
}

*/
/*
//By using class -->
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getName() {
        return `${this.firstName} ${this.lastName}`
    }
}

//Instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(person1);
// console.log(person2.dob);

// console.log(person1.getBirthYear());
// console.log(person1.getName());

*/

//-----------------------------------------------DOM----------------------------------------------------------------

//console.log(window);


//Single element
/*
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
for (i=0; i<items.length; i++){
    console.log(items[i]);
};
//OR --> By using forEach and arrow function

items.forEach((item) => console.log(item)); 

const al = document.querySelector('.items');

// ul.lastElementChild.remove();
al.firstElementChild.textContent = 'Hello';
al.children[1].innerText = 'Brad';
al.lastElementChild.innerHTML = '<h1>Hello</h1>';

const bt = document.querySelector('.btn');
bt.style.background = 'red';

*/
//----------------------------------------Events-------------------------------------------------------------
/*
const bt = document.querySelector('.btn');
bt.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = 'red';
});
*/

//--------------------------------------------Form-----------------------------------------------------------
/*
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML="Please Enter all the field";

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //Clear fields
        nameInput.value='';
        emailInput.value='';
    }
}
*/

//-------------------------------------Objects--------------------------------------------------------------
/*
const person = {
    name: "John",
    age: 30,
    isMarried: false,
};

const person1 = {...person,name:"Jack"};

const names = ["abc","def","ghi"];
const names1 = [...names,"jkl"];

console.log(person1);
console.log(names1);
*/



