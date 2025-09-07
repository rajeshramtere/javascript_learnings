const fs = require('fs');

console.log('Starting reading the file...');

fs.readFile("file.txt", "utf-8", function(error, data){
    if(error){
        console.log("Error reading the file:", err);    
    } else {
        console.log("File content:", data);
    }   
});

console.log("Finished reading the file.");

// In the above code, the readFile function is asynchronous and takes a callback function as its last argument.
// This callback function is executed once the file reading operation is complete.
// The main thread continues executing the code after initiating the readFile operation, 
// which is why "Finished reading the file." is logged before the file content is displayed.