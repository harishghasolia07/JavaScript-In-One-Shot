const x = {
  name: "Harish",
  role: "JS Developer",
  exp: 30,
  show: function () {
    // Use Before ES6--->

    let that = this;
    console.log(this);
    setTimeout(function () {
      console.log(`The name is ${this.name} and role is ${this.role}`);
      console.log(`The name is ${that.name} and role is ${that.role}`);
    }, 1000);

    // Use After ES6--->(By using arror function)--->

    setTimeout(() => {
      // Arraow function will not create its own this, it will use the this of its parent.
      console.log(`The name is ${this.name} and role is ${this.role}`);
    }, 1000);
  },
};

x.show();

/*
//Note: A self-invoking anonymous arrow function, also known as an immediately invoked arrow 
function (IIFE), is a function that runs as soon as it is defined. It is an anonymous function
that is invoked (started) automatically, without being called.

(() => {
    console.log('Ok');
})();

*/
