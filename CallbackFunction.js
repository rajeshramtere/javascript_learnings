// Call back function -> A function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

// async call/task -> once this is completed, then only callback function will be called

//basic callback
function greet(name, callback){
    console.log(`Hello, ${name}`);
    callback();
}

//callback function
function welcome(){
    console.log("Welcome !!!");
}

greet("Rajesh", welcome); // Hello, Rajesh \n Welcome !!!

//////////////////////////////////////////////////////////////////////////////////

// callback with async function
function printInfo(name, callback){
    // async function/task
    setTimeout(function(){
        console.log(`In printInfo, ${name}`);
        callback("Please call me back." );
    }, 1000); // 1 second delay
}

//callback function
function displayInfo(message){
    console.log(message);
}

printInfo("Rajesh", displayInfo); // In printInfo, Rajesh (after 1 second) \n Please call me back.


////////////////////////////////////////////////////////////////////////////

function fetchUserData(id, callback){
    // Simulating an async data fetch operation
    setTimeout(function(){
        const users = {
            1: { name: "John Doe", age: 28 },   
            2: { name: "Jane Smith", age: 34 },
            3: { name: "Alice Johnson", age: 45 }
        };

        const user = users[id];
        if(user){
            callback(null, user); // No error, return user data
        }else{
            callback("User not found", null); // Error occurred
        }
    }, 2000); // 2 seconds delay
}

//callback function
function handleUserData(error, user){
    if(error){
        console.log("Error fetching user data:" , error);
    } else {
        console.log("User Data:" , user);
    }

}

fetchUserData(2, handleUserData); // After 2 seconds: User Data: [object Object]
fetchUserData(5, handleUserData); // After 2 seconds: Error fetching user data: User not found