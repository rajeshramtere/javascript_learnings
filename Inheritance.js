// Multiple Inheritance is not supported in JavaScript,

// Grand Parent Class
class Automobile{
    constructor(communicationType){
        this.communicationType = communicationType; // e.g., land, water, air
    }

    getType(){
        console.log(`Type of vehicle: ${this.communicationType}`);
    }
}

// Base Class
class Vehicle extends Automobile{
    constructor(name, model, year, engine){
        super("Road"); // calling the constructor of the grand parent class
        this.name = name;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    getVehicleDetails(){
        return `${this.name}, ${this.model}, ${this.year}, ${this.engine}`;
    }

    startEngine(){
        console.log(`Engine of ${this.name} started.`);
    }

    stopEngine(){
        console.log(`Engine of ${this.name} stopped.`);
    }
}

// Child Classes
class Car extends Vehicle{
    constructor(name, model, year, engine, doors, fuelType){
        super(name, model, year, engine);
        this.doors = doors;
        this.fuelType = fuelType;
    } 
    
    driveCar(){
        console.log(`Driving the car: ${this.name} - ${this.model} model.`);
    }
}

// Multi-Level Inheritance
class TwoWheeler extends Vehicle{
    constructor(name, model, year, engine, type){
        super(name, model, year, engine);
        this.type = type; // e.g., motorcycle, scooter
    }

    driveTwoWheeler(){
        console.log(`Riding the two-wheeler: ${this.name} - ${this.model} model.`);
    }
}

// Creating the objects (instances) of the classes using the 'new' keyword
const car1 = new Car("Toyota", "Camry", 2020, "2.5L", 4, "Petrol");
console.log(car1.name + " : " + car1.model); // Toyota : Camry
console.log(car1.getVehicleDetails()); // Toyota, Camry, 2020, 2.5L
car1.startEngine(); // Engine of Toyota started.
car1.driveCar(); // Driving the car: Toyota - Camry model.
car1.stopEngine(); // Engine of Toyota stopped.

const bike1 = new TwoWheeler("Yamaha", "FZ", 2019, "150cc", "Motorcycle");
console.log(bike1.getVehicleDetails());
bike1.startEngine(); // Engine of Yamaha started.
bike1.driveTwoWheeler(); // Riding the two-wheeler: Yamaha - FZ model.
bike1.stopEngine(); // Engine of Yamaha stopped.
// Output: Yamaha, FZ, 2019, 150cc
bike1.getType(); // Type of vehicle: undefined (since type is not set in Vehicle class)