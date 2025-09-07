// Description:
// The 'async' keyword is used to declare asynchronous functions in JavaScript.
// An 'async' function always returns a promise, and allows the use of the 'await' keyword inside it.
// The 'await' keyword pauses the execution of the async function until 
// the awaited promise is settled (fulfilled or rejected).
// This makes asynchronous code easier to read and write, as it looks more like synchronous code.

// // CASE 1
// //async function without await
// async function fun1() {
//     console.log("This is async function without await step.");
//     return 42; //returns a promise (resolved) on top of 42;
// }

// fun1()
// .then(result => {
//     console.log(result);
// });

// // CASE 2
// //async function with error
// async function fun2() {
//     console.log("This is async function with error.");
//     throw new Error("This is Error");
// }

// fun2 ()
// .catch(result => {
//     console.log(`The Error message: ${result}`);
// });


// CASE 3
// async function with resolved / rejected promise

function getInfo(){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if(randomNumber > 0.5){
                resolve(randomNumber);
            }
            else{
                reject(new Error("Value is less than 0.5"));
            }
        }, 2000);
    })
}

// create async function whcih calling getInfo()
async function getNumberInfo() {
    try{
        const promiseResult = await getInfo();
        console.log("Result: ", promiseResult)
    }
    catch(error){
        console.log("Error: ", error);
    }
}

//call getNumberInfo()
getNumberInfo();
