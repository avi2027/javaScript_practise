var prompt = require('prompt-sync')();

let x = parseInt(prompt("Enter a number : "))

if(x % 2 == 0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}