// Case 1 - All promises resolve
// fun1 -- resolve
// fun2 -- resolve
// fun3 -- resolve
// Promise.all waits for all promises to resolve and returns an array of their results.

const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from Function 1");
        }, 2000);
    })
}

const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from Function 2");
        }, 2000);
    })
}

const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1,2,3,4,5];
            resolve("Data from Function 3 : " + data);
        }, 2000);
    })
}

Promise.all([
    function1(), 
    function2(), 
    function3()
])
.then(dataArray => {
    // This will run when all promises are fulfilled
    console.log("All data from different functions ", dataArray);
})
.catch(error => {
    // This will run if any promise is rejected
    console.log("Error in promise : ", error);
});



// Case 2 - One promise resolves, one rejects
// fun1 -- resolve
// fun2 -- rejected
// Promise.all will reject as soon as any promise in the array is rejected.

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
            reject("While fetching the data from Function 5");
        }, 1000);
    });
};

Promise.all([
    function4(),
    function5()
])
.then(data => {
    // This will run only if all promises are fulfilled
    console.log("Data from all functions: " +data)
})
.catch(error => {
    // This will run if any promise is rejected
    console.log("Erro occured: " +error);
})
