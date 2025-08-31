class Employee{
    constructor(name, age, designation){
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    getEmployeeDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }   
}

const emp1 = new Employee("Rajesh Ramtere", 30, "Developer");
console.log(emp1.name); // Rajesh Ramtere
console.log(emp1.age); // 30
console.log(emp1.designation); // Developer
emp1.getEmployeeDetails(); // Name: Rajesh Ramtere, Age: 30, Designation: Developer
