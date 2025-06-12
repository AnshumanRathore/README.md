Great! Learning Objects in JavaScript is essential, as they form the foundation of almost everything in JS (DOM, APIs, etc.). 

✅ 1. What is an Object in JS?

An object is a collection of key-value pairs.

Example:

const person = {
  name: "John",
  age: 30,
  isStudent: false
};


---

✅ 2. Accessing Object Properties

Dot notation:


console.log(person.name); // John

Bracket notation:


console.log(person["age"]); // 30

➡️ Use bracket notation when:

The key is stored in a variable

The key has special characters/spaces



---

✅ 3. Adding & Updating Properties

person.city = "New York";     // Add
person.age = 31;              // Update


---

✅ 4. Deleting Properties

delete person.isStudent;


---

✅ 5. Objects with Methods (Functions in Objects)

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, John

➡️ Modern shorthand:

const person = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  }
};


---

✅ 6. Looping Through an Object

for (let key in person) {
  console.log(key + ": " + person[key]);
}


---

✅ 7. Nested Objects

const student = {
  name: "Alice",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};

console.log(student.address.city); // Mumbai


---

✅ 8. Array of Objects

const users = [
  { name: "Ram", age: 22 },
  { name: "Shyam", age: 25 },
];

console.log(users[0].name); // Ram


---

✅ 9. Object Destructuring

const person = { name: "John", age: 30 };

const { name, age } = person;
console.log(name); // John


---

✅ 10. Spread Operator with Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a:1, b:2, c:3 }


---

✅ Practice Tasks for You

1. Create an object car with properties: brand, model, year. Add a method to display the car info.


2. Create an array of objects representing books with title, author, and price.


3. Write a function that takes an object and prints all key-value pairs.


4. Write code to merge two objects using the spread operator.


