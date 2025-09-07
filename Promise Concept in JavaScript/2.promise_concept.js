const randomNumberPromise = new Promise((resolve, reject) => {

    // asynchronous operation
    setTimeout(() =>{
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(randomNumber); // promise resolved successfully
        } else {
            reject(new Error("As number is less than or equal to 0.5")); // promise rejected with an error message
        }   
    }, 2000); // 2 seconds delay
});

randomNumberPromise
    .then(result => {
        console.log("Promise resolved with value:", result);
    })
    .catch(error => {
        console.log("Promise rejected with value: ", error.message);
    });

// In the above code, we create a new Promise that simulates an asynchronous operation using setTimeout.
// After a delay of 2 seconds, it generates a random number between 0 and 1.
// If the number is greater than 0.5, the promise is resolved with that number.
// If the number is less than or equal to 0.5, the promise is rejected with an error message.
// We then handle the resolved and rejected cases using the .then() and .catch() methods respectively.