function getEvenNumber(number, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

             if(number % 2 == 0){
                resolve(number);
            }else{
                reject(new Error("Number is not even number"));
            }

        }, delay);
       
    });
}

getEvenNumber(12, 2000)
    .then(result => {
        console.log("Step 1: Getting result with Even Number: ", result);
        return getEvenNumber(489, 2000);
    })
    .then(result => {
        console.log("Step 2: Getting result with Even Number: ", result);
    })
    .catch(error => {
        console.log("Promise rejected with value: ", error.message);
    })

    