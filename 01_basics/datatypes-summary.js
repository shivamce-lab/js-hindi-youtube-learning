// data categoruisation 
// #primitive : 7 categories : String, Number, Boolean, Null, undefined, Symbol, BigInt
// Many times to make any object unique we wrap it in symobol. thats for now. BigInt
// BigInt handles very big or scientific values

// #non primitive
// Reference (Non-Primitive)
//Arrays, Objects, Functions
//To tell type of variable: isnt needed in javascript
const score= 10;
//Dynamically typed Language
// Type script, Data Type is mentioned there.
// Decimal and Integers both considered inside numbers only.
const id= Symbol('123');
const anotherId=('123');
let animal
let birdpresent= null
console.log(id == anotherId);
const bigNumber = 34567893456783456789345678345678934567834567893456789n
console.log(bigNumber);
// array,objects, functions
const heros = ["Shaktiman", "naagraj", "doga", "God"]
let myObj= {
    name: "Hitesh",
    age: 22
}
// console.log(heros);
// console.log(myObj);
// definiton of funtion :function(){}
const myFunction =function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof animal);
console.log(typeof birdpresent);
console.log(typeof id);
console.log(typeof myFunction);

// +++++++++++++++++

let myname= "Shivam"
let anothername = myname
console.log(anothername);
console.log(myname);


