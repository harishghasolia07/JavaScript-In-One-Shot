try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new ReferenceError("Age cannot be greater than 150");
  }
} catch (err) {
  // console.log(e)
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
} finally {
  //--->Finally block will always execute whether there is an error or not in any of the try or catch block
  console.log("This is the final statement of the try block");
  //-->Usually we use finally block for clean up code like
  //-->closing the file, closing the database connection,exit the loop,Write to the log file etc.
}

console.log("This script is still running...."); //-->If there is any error occured in both try and catch block then this line will not execute

const fun = () => {
  try {
    let age = 10;
    console.log("Program is running");
    return;
  } catch (err) {
    // console.log(e)
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  } finally {
    //---> Finally block will always execute whether there is an error or not in any of the try or catch block or program returned from try block
    console.log("This is the final statement of the try block");
    //--> Usually we use finally block for clean up code like
    //--> closing the file, closing the database connection,exit the loop,Write to the log file etc.
  }
};
fun();
console.log("End of the program.");
