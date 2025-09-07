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

