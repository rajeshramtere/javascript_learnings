// Methiod Overloading in JavaScript
// JavaScript does not support method overloading in the traditional sense like some other languages (e.g., Java, C++).
// In JavaScript, if you define multiple functions with the same name, 
// the last defined function will overwrite the previous ones.

function add(x, y) {
    return x + y;
}

function add(x, y, z) {
    return x + y + z;
}

console.log(add(2, 3)); // NaN, because z is undefined in the second definition
console.log(add(2, 3, 4)); // 9 

///////////////////////////////////////////////////////////////////

function displayBrowserInfo(browser, version, platform) {
    if (version === undefined) {
        console.log(`Browser: ${browser}`);
    } else if (platform === undefined) {
        console.log(`Browser: ${browser}, Version: ${version}`);
    } else {
        console.log(`Browser: ${browser}, Version: ${version}, Platform: ${platform}`);
    }
}       

displayBrowserInfo("Chrome"); // Browser: Chrome
displayBrowserInfo("Firefox", "89.0"); // Browser: Firefox, Version: 89.0
displayBrowserInfo("Edge", "91.0", "Windows"); // Browser: Edge, Version: 91.0, Platform: Windows