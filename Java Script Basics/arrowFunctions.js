// Arrow function has not function name and uses => syntax
// Arrow functions do not have their own 'this' context and inherit it from the parent scope
// Arrow functions are always anonymous

// 1. BASIC SYNTAX
let add = (x, y) => x + y;
console.log(add(5, 10)); // 15

let square = n => n * n; // single parameter, no parentheses needed
console.log(square(5));

let greet = () => console.log("Hello, World!"); // no parameters
greet();

//////////////////////////////////////////////////////
const person = {
    name: "Rajesh", 
    age: 30, 
    dept: "IT"
}

let employeeDetails = (person) => `${person.name} is ${person.age} years old and works in ${person.dept} department.`
console.log(employeeDetails(person));

//////////////////////////////////////////////////////
const greeting = (username='admin', password='admin123') => `Hello User, your username is: ${username} and 
your password is: ${password}`;
console.log(greeting());

///////////////////////////////////////////////////////////
//REST PARAMETER and varargs

let sum = (...number) => number.reduce((acc, n) => acc + n, 0);
const total = (sum(1,2,3,4,5,78,45,67,788,76)); 
console.log(total); // 1069

const browserInfo = (browser, ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('Other Details:', details);
}

browserInfo('Chrome', 'v1.0', 'GOOGLE', 'HEADLESS', 'FAST');