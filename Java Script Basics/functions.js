// 1. FUNCTION DECLARATION
function add(x, y) {
    return x + y;
}

let sum = add(5, 10);
console.log("Addition is: ", sum); // 15


//2. FUNCTION EXPRESSION : ANNONYMOUS FUNCTION
let multiply = function(x, y) {
    return x * y;
}
let product = multiply(5, 10);
console.log("Multiplication is: ", product); // 50


//3. ARROW FUNCTION : ANNONYMOUS FUNCTION
let divide = (x, y) => x / y;
let quotient = divide(10, 5);
console.log("Division is: ", quotient); // 2


// 4. FUNCTION CONSTRUCTOR
let subtract = new Function("x", "y", "return x - y;");
let difference = subtract(10, 5);
console.log("Subtraction is: ", difference); // 5

let greet = new Function("name", "return 'Hello, ' + name + '!';");
let message = greet("John");
console.log(message); // Hello, John!

// 5. IIFE - Immediately Invoked Function Expression
(function() {
    console.log("This is an IIFE function");
})();

(function(name) {
    console.log("Hello, " + name + " from IIFE");
})("Alice");


// 6. GENERATOR FUNCTION
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // undefined   


// 7. ANNONYMOUS FUNCTION
// no specific name
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(n) {
    return n * n;
});
console.log(squares); // [1, 4, 9, 16, 25]


// 8. RECURSIVE FUNCTION
function factorial(n) {
    if (n === 0) {
        return 1;
    }   
    return n * factorial(n - 1);
}
let fact = factorial(5);
console.log("Factorial is: ", fact); // 120


// 9. HIGHER ORDER FUNCTION
function operate(x, y, operation) {
    return operation(x, y);
}

let sumResult = operate(5, 10, (a, b) => a + b);
console.log("Sum using higher order function: ", sumResult); // 15