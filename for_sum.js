let prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number : "))
let sum = 0
for(let i=0; i<num; i++){
    sum += (i+1)
    console.log((i+1), "+")
}

console.log("The sum of first "+ num +" natural number is "+sum)