// Case 1 - 
// fun1 -- resolve
// fun2 -- resolve
// fun3 -- resolve

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
    console.log("All data from different functions ", dataArray);
})
.catch(error => {
    console.log("Error in promise : ", error);
});



// Case 2
// fun1 -- resolve
// fun2 --  rejected

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
    console.log("Data from all functions: " +data)
})
.catch(error => {
    console.log("Erro occured: " +error);
})
