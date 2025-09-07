const resolvePromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 500);
    });
};

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected");
        }, 1000);
    });
};

// Promise.race takes an array of promises and returns a new promise
// that settles as soon as the first input promise settles (fulfilled or rejected).
// In this example, resolvePromise resolves after 500ms and rejectPromise rejects after 1000ms.
// Since resolvePromise settles first, Promise.race will resolve with its value.

Promise.race([
    resolvePromise(),
    rejectPromise()
])
.then(result => {
    console.log("Result: " ,result);
})
.catch(error => {
    console.log("Error: " ,error);
})