var prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age:"));

if (age <= 13) {
    console.log("You are a kid");
} else if (age < 18) {
    console.log("You are a teenager");
} else {
    console.log("WELCOME");
    console.log("You are an adult");
}
