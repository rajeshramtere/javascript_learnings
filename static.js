// STatic variables
class Car{
    static numberOfWheels = 4; // Static variable

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }   

    getCarDetails(){
        return `Brand: ${this.brand}, Model: ${this.model}, Wheels: ${Car.numberOfWheels}`;
    }   

    static start(){
        console.log("Car started.");
    }

    static stop(){
        console.log("Car stopped.");
    }

    drive(){
        console.log(`Driving the car: ${this.brand} - ${this.model}`);
    }
}

const c = new Car("Honda", "Civics");
console.log(c.getCarDetails()); // Brand: Toyota, Model: Camry, Wheels: 4
console.log(c.drive()); // Driving the car: Toyota - Camry
console.log(Car.numberOfWheels); // 4
console.log(Car.start()); // Car started.
console.log(Car.stop()); // Car stopped.