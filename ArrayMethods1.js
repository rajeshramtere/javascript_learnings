// 1. EVERY
let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(n => n%2 === 0);
console.log(allEven); // true

let num = [1, 2, 3, 4, 5];
let allPositive = num.every(n => n > 10);
console.log(allPositive); // false

// 2. SOME
let nums = [1, 3, 5, 7, 8, 23, 100];
let someEven = nums.some(n => n%2 === 0);
console.log(someEven); // true
let greaterThanTen = nums.some(n => n < 0);
console.log(greaterThanTen); // true


// 3. FIND
let number = [1, 3, 5, 7, 8, 23, 100];
let firstEven = number.find(n => n%2 === 0);
console.log(firstEven); // 8
let firstGreaterThanTen = number.find(n => n > 10);
console.log(firstGreaterThanTen); // 23 

// 4. FINDINDEX
let numArray = [1, 3, 5, 7, 8, 23, 100];
let firstEvenIndex = numArray.findIndex(n => n%2 === 0);
console.log(firstEvenIndex); // 4
let firstGreaterThanTenIndex = numArray.findIndex(n => n > 10);
console.log(firstGreaterThanTenIndex); // 5

// 5. indexOf
let letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f'];
let indexA = letters.indexOf('a');
console.log(indexA); // 0
let indexZ = letters.indexOf('z');
console.log(indexZ); // -1 (not found)


// 6. LASTINDEXOF
let chars = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'a'];
let lastIndexA = chars.lastIndexOf('a');
console.log(lastIndexA); // 7
let lastIndexZ = chars.lastIndexOf('z');
console.log(lastIndexZ); // -1 (not found)


// 7. REVERSE
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple', 'Strawberry'];
fruits.reverse();
console.log(fruits); // ['Strawberry', 'Pineapple', 'Grapes', 'Mango', 'Orange', 'Banana', 'Apple']


// 8. SORT
let numsArray = [5, 3, 8, 1, 2];
let ascending = numsArray.sort(); // ascending
console.log(ascending); // [1, 2, 3, 5, 8]
let fruits1 = ['Apple', 'Banana', 'Orange', '123Mango', 'Grapes', 'Pineapple654', 'Strawberry'];
let sortedFruits = fruits1.sort();
console.log(sortedFruits); // ['123Mango', 'Apple', 'Banana', 'Grapes', 'Pineapple654', 'Orange', 'Strawberry']

