//Symbol datatype (Primitive values)
const mysym =Symbol("key1")

//object literals
const user= {
    [mysym]:" Symbol value",
    name : "anshu",
    umar: 20,
    location: "jaipur",
    email : "anshuman@gmail.com",
    isLoggedin : false,
    days:["domingo","lunes"],
}
console.log(user.name);
console.log(user["location"]);
console.log(user.days);

//symbol is written or use by using []
console.log(user[mysym]);

