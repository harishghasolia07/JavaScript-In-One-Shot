let key = prompt("Enter key you want to set");
let value = prompt("Enter value for the key");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red" || key == "green") {
  localStorage.removeItem(key);
}

if (key == 0) {
  localStorage.clear();
  console.log("Local Storage is cleared");
}
