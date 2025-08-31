const browser = ["Chrome", "Firefox", "Edge", "Safari", "Opera", "IE"];

for(const b of browser){
    console.log(b);

    if(b === "Edge"){
        console.log("Launching Edge Browser...");
        break;
    }
}

//for..of loop on object
console.log("-----------------------------------------------");
const person = {
    firstName: "Rajesh",
    lastName: "Ramtere",
    age: 30
};

for(const key in person){
    console.log(key + ": " + person[key]);
}

console.log("-----------------------------------------------");
const browse = ["Chrome", "Firefox", "Edge", "Safari", "Opera", "IE"];
for(const br in browse){
    console.log(browse[br]);
}