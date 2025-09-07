const fs = require('fs');

console.log('Starting reading the file...');
// Synchronous file read
const data = fs.readFileSync("file.txt", "utf-8");
console.log("File content:", data);

console.log("Finished reading the file.");
