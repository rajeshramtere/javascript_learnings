//1. MAP
let numbers = [1,2,3,4,5,6,7,8,9,10];
let doubleNumbers = numbers.map(n => n*2)
console.log(doubleNumbers); // [2,4,6,8,10,12,14,16,18,20]

//F to C
let fahrenheit = [32, 68, 100, 212];
let celsius = fahrenheit.map(f => (f - 32) * 5/9);
console.log(celsius); // [0, 20, 37.77777777777778, 100]

let celsius2 = fahrenheit.map(toCelsius);
function toCelsius(f) {
    return (f - 32) * 5/9;
}
console.log(celsius2); // [0, 20, 37.77777777777778, 100]


// 2. FILTER
let ages = [12, 17, 45, 22, 25, 30, 15, 18];
let evenAges = ages.filter(age => age%2 === 0); // [12, 22, 30]
console.log(evenAges);
let adultAges = ages.filter(age => age >= 18); // [22, 25, 30, 18]
console.log(adultAges);

let employee = [
    {name: "John", age: 25, department: "HR"},
    {name: "Jane", age: 30, department: "Finance"},
    {name: "Mike", age: 35, department: "IT"},
    {name: "Sara", age: 28, department: "Finance"},
    {name: "Tom", age: 40, department: "IT"},  
    {name: "Lucy", age: 22, department: "HR"},
    {name: "Anna", age: 29, department: "IT"}
];
let itDept = employee.filter(dept => dept.department === "IT");
console.log(itDept);
let financeDept = employee.filter(dept => {
    return dept.department === "Finance" && dept.age > 28;
});
console.log(financeDept);


// 3. REDUCE
let nums = [1,2,3,4,5,67,23,765,124,355,764,123,45,23];
let sum = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // 2304
let max = nums.reduce((accumulator, num) => Math.max(accumulator, num), nums[0]);
console.log(max); // 765

//cart: name, price
let cartItems = [
    {name: "Laptop", price: 50000},
    {name: "Phone", price: 35000},
    {name: "Tablet", price: 30000},
    {name: "Monitor", price: 15000},
    {name: "Keyboard", price: 1500},
    {name: "Mouse", price: 600},
    {name: "Headphones", price: 999}
]

let totalPrice = cartItems.reduce((total, itemPrice) => total + itemPrice.price, 0);
console.log(totalPrice); // 133099


