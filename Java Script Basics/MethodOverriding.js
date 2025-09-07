class Car{
    minSpeed = 20;
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
     
    startEngine(){
        console.log(`Engine of Car started.`);
    }

    stopEngine(){
        console.log(`Engine of Car stopped.`);
    }   
}

class Audi extends Car{

    startEngine(){
        console.log(`Engine of Audi started.`);
    }

    stopEngine(){
        console.log(`Engine of Audi stopped.`);
    }   

    autoPark(){
        console.log("Audi is parking automatically.");
    }
}

const myCar = new Audi();
myCar.startEngine(); // Engine of Audi started.
myCar.stopEngine(); // Engine of Audi stopped.
myCar.autoPark(); // Audi is parking automatically.
console.log(myCar.minSpeed); // 20

const car1 = new Car("Toyota", "Camry", 2020);
car1.startEngine(); // Engine of Car started.
car1.stopEngine(); // Engine of Car stopped.


// Method overriding is a feature that allows a subclass or child class 
// to provide a specific implementation of a method 
// that is already defined in its superclass or parent class.

// When a method in a subclass has the same name, same parameters or signature, 
// and same return type(or sub-type) as a method in its super-class, 
// then the method in the subclass is said to override the method in the super-class.

// When you call the overridden method from an object of the subclass, 
// the version of the method that is executed is the one defined in the subclass, 
// not the one in the super-class. This allows for dynamic polymorphism, 
// where the behavior of a method can be determined at runtime based on the object type.   