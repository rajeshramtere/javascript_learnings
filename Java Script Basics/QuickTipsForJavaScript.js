// 1. FIND unique value from an array
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6];
const uniqueNumbers = [...new Set(numbers)]; //Spread operator to convert Set back to array
console.log(uniqueNumbers); // [ 1, 2, 3, 4, 5, 6 ]

// 2. INT to STRING conversion
const num = 123;
const str = num + ''; // Using concatenation
console.log(str + 10); //12310

// 3. FLOAT to INT conversion
const floatNum = 12.34;
const intNum = parseInt(floatNum); // Using parseInt function
console.log(intNum); // 12

// 4. Check if a number is Number
const value = 56;
if(typeof value === 'number' && !isNaN(value)){
    console.log(`${value} is a valid number.`);
}else{
    console.log(`${value} is not a valid number.`);
}

// 5. Swap two variables
let a = 5;
let b = 10;
console.log(`Before Swapping=> a: ${a}, b: ${b}`); // a: 5, b: 10
[a, b] = [b, a];
console.log(`After Swapping=> a: ${a}, b: ${b}`); // a: 10, b: 5

//6. Check object has a property
const person = {name: "John", age: 30};
if(person.hasOwnProperty('age')){
    console.log("Property 'age' exists in person object.");
}else{
    console.log("Property 'age' does not exist in person object.");
}

// 7. Remove falsy values from an array: false, null, 0, "", undefined, NaN
const mixedArray = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
const truthyArray = mixedArray.filter(Boolean);
console.log(truthyArray); // [1, 2, 3, 4, 5]

// 8. String to uppercase and lowercase
const text = "Hello World";
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"

// 9. If ARRAY contains specific element
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Grapes")); // false

// 10. Check array is empty or not
const arr = [];
if(arr.length === 0){
    console.log("Array is empty."); 
}else{
    console.log("Array is not empty.");
}
// Output: Array is empty.

// 11. Generate random number between a range
const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Random number between 1 and 100

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   
console.log(getRandomNumber(100, 10000)); // Random number between 1 and 100

// 12. String to number conversion
const strNum = "125";
const strNum1 = "125.67";
const num1 = parseFloat(strNum); 
const num2 = parseFloat(strNum1);
console.log(num1); // 125
console.log(num2); // 125.67

// 13. Join array elements into a string
const arr1 = ["Hello", "World", "from", "JavaScript"];
const joinedString = arr1.join(" "); // Join with space
console.log(joinedString); // "Hello World from JavaScript"

// 14. Get object property
const user = {
    id: 1, 
    username: "john_doe", 
    email: "abc@gmail.com"
}
console.log(user.username); // "john_doe"
console.log(user['email']); // abc@gmail.com
console.log(user.address); // undefined

// 15. Clone an array or object
const originalArray = [1, 2, 3, 4, 5];  
const clonedArray = [...originalArray]; // Using spread operator
console.log(clonedArray); // [1, 2, 3, 4, 5]
const userDuplicate = {...user}; // Using spread operator
console.log(userDuplicate); // { id: 1, username: 'john_doe', email: 'abc@gmail.com' }


// 16. Convert object to array
const Employee = {
    name: "Rajesh Ramtere",
    age: 30,
    designation: "Developer"
}

//A. Get Keys array
const keys = Object.keys(Employee);
console.log(keys); // [ 'name', 'age', 'designation' ]
//B. Get Values array
const values = Object.values(Employee);
console.log(values); // [ 'Rajesh Ramtere', 30, 'Developer' ]
//C. Get Keys-Values array
const entries = Object.entries(Employee);
console.log(entries); // [ [ 'name', 'Rajesh Ramtere' ], [ 'age', 30 ], [ 'designation', 'Developer' ] ]    


// 17. Fetch current date and time
const currentDate = new Date();
console.log(currentDate); // Current date and time
console.log(currentDate.toLocaleDateString()); //2025-08-31T18:20:45.194Z
console.log(currentDate.toLocaleTimeString()); //31/8/2025
console.log(currentDate.toISOString()); // ISO format - 11:50:45 pm
console.log(currentDate.getFullYear()); // Current year
console.log(currentDate.getMonth() + 1); // Current month (0-11, so +1)
console.log(currentDate.getDate()); // Current date (1-31)

// 18. Check variable is defined or not
let someVar;
if(typeof someVar === 'undefined'){
    console.log("someVar is not defined.");
}else{
    console.log("someVar is defined.");
}   

// 19. Truncate an array
let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Current Array Length before Truncate: " + sampleArray.length); // 9
sampleArray.length = 5; // Truncate to 5 elements
console.log(sampleArray); // [1, 2, 3, 4, 5]
console.log("Current Array Length after Truncate: " + sampleArray.length); // 5

// 20. Last element of an array
const numbersArray = [10, 20, 30, 40, 50];
console.log(numbersArray[numbersArray.length - 1]); // 50

