// Promise.any() takes an array of promises and returns a single promise
// that fulfills as soon as any of the input promises fulfills.
// If all promises are rejected, it returns an AggregateError.

const promise1 = Promise.reject("Error from promise1");
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Result from promise2");
});
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, "Result from promise3");
});

Promise.any([promise1, promise2, promise3])
	.then(result => {
		// This will log the result of the first fulfilled promise
		console.log("Fulfilled with:", result);
	})
	.catch(error => {
		// This will run only if all promises are rejected
		console.log("All promises were rejected:", error);
	});

    
// OUTPUT - 1
// Fulfilled with: Result from promise2

// OUTPUT - 2 - when all promises gets rejected
/* 
All promises were rejected: [AggregateError: All promises were rejected] {
  [errors]: [
    'Error from promise1',
    'Result from promise2',
    'Result from promise3'
  ]
}
*/
