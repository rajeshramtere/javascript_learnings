// 1. Object Literals: {}
const user = {
    name: "Rajesh",
    age: 30,
    country: "India",
    state: "Maharashtra",
    city: "Pune"
};
console.log(user); // { name: 'Rajesh', age: 30, country: 'India' }
console.log(user.name); // Rajesh
console.log(user['age']); // 30     
console.log(user.city); // Pune


// 2. CONSTRUCTOR FUNCTION
function person(name, age, country, state, city) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.state = state;
    this.city = city;   
}
const user1 = new person("John", 25, "USA", "California", "Los Angeles");
console.log(user1); // person { name: 'John', age: 25, country: 'USA', state: 'California', city: 'Los Angeles' }
console.log(user1.name); // John


// 3. CLASS STYLE
class Employee {
    constructor(name, age, country, state, city) {
        this.name = name;  // instance variable
        this.age = age;
        this.country = country;
        this.state = state;
        this.city = city;   
    } 

    address() {
        return `${this.name} lives in ${this.city}, ${this.state}, ${this.country}.`;
    }
}  

const emp1 = new Employee("Rajesh", 28, "India", "Maharashtra", "Pune");
console.log(emp1.address()); // Rajesh lives in Pune, Maharashtra, India.
console.log(emp1);


// 4. Object.create() with some prototype methods
let employeeProto = {
    printInfo: function(){
        console.log(`Hello, Employee name is: ${this.name} and age is: ${this.age}`);
    }
}
let emp2 = Object.create(employeeProto);
emp2.name = "Rajesh Ramtere";
emp2.age = 30;
emp2.printInfo(); // Hello, Employee name is: Rajesh Ramtere and age is: 30



// 5. FACTORY FUNCTION : returns an object
function createEmployee(name, age, country, state, city) {
    return {
        name: name,
        age: age, 

        printInfo: function() {
            console.log(`Hello, Employee name is: ${this.name} and age is: ${this.age}`);
        }       
    }
}

const emp3 = createEmployee("John Doe", 35, "USA", "California", "Los Angeles");
console.log(emp3);
emp3.printInfo(); // Hello, Employee name is: John Doe and age is: 35

