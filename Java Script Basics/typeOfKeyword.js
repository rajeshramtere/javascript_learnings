let x = 30;
console.log(typeof x); // number

x = 30.5;
console.log(typeof x); // number

x = "Hello";
console.log(typeof x); // string

x = true;
console.log(typeof x); // boolean

x = {
    name: "Rajesh",
    age: 30
};
console.log(typeof x); // object

const arr = [1,2,3,4,5];
console.log(typeof arr); // object

const j = null;
console.log(typeof j); // object (this is a known quirk in JavaScript)

let y;
console.log(typeof y); // undefined

function myFunction() { 
    return "Hello World";
}
console.log(typeof myFunction); // function


