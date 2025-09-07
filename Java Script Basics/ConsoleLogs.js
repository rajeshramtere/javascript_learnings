console.log("Hello World");
console.error("This is Error message");
console.warn("This is warning message");
console.info("This is Information message");

const user = {
    name: "Rajesh",
    age: 30,
    city: "Pune"
};

const user1 = {
    name: "Sachin",
    age: 32,
    city: "Hyderabad"
};

console.table({user, user1});

console.group("Login Features");
console.log("Username");
console.log("Password");
console.log("Login");
console.log("Reset Password");
console.groupEnd();


console.time("Print 1 to n values");
for(let i=1; i<10; i++)
{
    console.log(i);
}
console.timeEnd("Print 1 to n values");

console.count("Reset Password");
console.count("Reset Password");
console.count("Reset Password");
console.count("Reset Password");


console.assert(10 === 20, "This is failed");
console.assert(10 === 10, "This is failed");


function testInfo(){
    console.trace();
}
testInfo();



