const prompt = require('prompt-sync')();
let size = parseInt(prompt("Enter a size : "))
let i,j
for(i=1; i<=size; i++){
    for(j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

