// declaration of an array
let myArray = []; // empty array

let language = ["Java", "JavaScript", "Python", "C++", "Ruby"];

//1.push - add element at the end
language.push("TypeScript");
console.log(language); // ["Java", "JavaScript", "Python", "C++", "Ruby", "TypeScript"]
language.push("Dot Net", "PHP");
console.log(language); // ["Java", "JavaScript", "Python", "C++", "Ruby", "TypeScript", "Dot Net", "PHP"]


//2.pop - remove element from the end
let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.pop();
console.log(numbers); // [1,2,3,4,5,6,7,8,9]

//3.shift - remove element from the beginning
let fruits = ["Apple", "Banana", "Orange", "Mango"]; 
fruits.shift();
console.log(fruits); // ["Banana", "Orange", "Mango"]

//4.unshift - add element at the beginning
fruits.unshift("Pineapple");
console.log(fruits); // ["Pineapple", "Banana", "Orange", "Mango"]
fruits.unshift("Grapes", "Strawberry");
console.log(fruits); // ["Grapes", "Strawberry", "Pineapple", "Banana", "Orange", "Mango"]

//5. splice - add/remove element at a specific index
let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
cars.splice(2, 0, "Honda"); // add Honda at index 2
console.log(cars); // ["BMW", "Audi", "Honda", "Mercedes", "Toyota"]
cars.splice(1, 2); // remove 2 elements from index 1
console.log(cars); // ["BMW", "Mercedes", "Toyota"]

//6. slice - extract a portion of an array
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let newColors = colors.slice(1, 4); // extract from index 1 to 3
console.log(newColors); // ["Green", "Blue", "Yellow"]

//7. concat - merge two or more arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//8. indexOf - find the index of an element
let animals = ["Dog", "Cat", "Elephant", "Lion"];
let index = animals.indexOf("Elephant");
console.log(index); // 2
index = animals.indexOf("Tiger");
console.log(index); // -1 (not found)

//9. includes - check if an array contains a specific element
let testArray = [10, 20, 30, 40, 50];
let has30 = testArray.includes(30);
console.log(has30); // true
let has60 = testArray.includes(60);
console.log(has60); // false

