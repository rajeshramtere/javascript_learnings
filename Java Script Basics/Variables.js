// var keyword - globally / locally scoped
// reinitialization is allowed / redeclarable / updatable
// you can't access locally declared var variable outside the function


var a = 10;
console.log(a);

function  print(){
    var b = 20;
    console.log(b); //20
}
print();
//console.log(b); // error: b is not defined

var browser = "Chrome";
var browser = "Firefox"; // redeclaration is possible
console.log(browser); // Firefox
browser = "Edge"; // updating is possible
console.log(browser); // Edge

var g;
console.log(g); // undefined -> javascript engine assigns undefined to uninitialized variable

g = "Hello World";
console.log(g); // Hello World

// issue with var
var name = "Rajesh"
var age = 30;
if(age > 18){
    var name = "Ramesh" // re-declaration
}
console.log(name); // Ramesh

////////////////////////////////////////////////////////////////////////////
//let
//scope- block scoped
//{} - block

let firstName = "Rajesh";
let salary = 30;
if(salary > 18){
    let lastName = "Ramtere" // new variable
    console.log(lastName); // Ramesh
}
// console.log(lastName); // lastName is not defined
console.log(firstName); // Rajesh

//
let length = 50;
//let length = 60; // SyntaxError: Identifier 'length' has already been declared
length = 60; // updating is possible
console.log(length); // 60
let m; // declaration
console.log(m); // undefined

//const - value can't be changed
// can't be re-declared / can't be updated
const pi = 3.14; // must be initialized during declaration
//pi = 3.15; // TypeError: Assignment to constant variable.
console.log(pi);
//const pi2;
//console.log(pi2); // SyntaxError: Missing initializer in const declaration