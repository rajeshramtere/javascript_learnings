// Promise.allSettled() takes an array of promises and returns a new promise
// that resolves after all of the input promises have settled (either fulfilled or rejected).
// The result is an array of objects describing the outcome of each promise.

const function4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from Function 4");
        }, 1000);
    });
}

const function5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error occured while fetching the data from Function 5");
        }, 1000);
    });
};

// Here, function4 resolves and function5 rejects after 1 second.
// Promise.allSettled will wait for both to finish and then provide their results.
Promise.allSettled([
    function4(),
    function5()
])
.then(results => {
    results.forEach(result => {
        if(result.status === 'fulfilled'){
            console.log("Function Promise Status:" , result.value);
        }
        else{
            console.error("Reason for rejection:" , result.reason);
        }
    })
})

