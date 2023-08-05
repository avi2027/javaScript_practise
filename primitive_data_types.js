// primitive data types in javaScript
// nn bb ss u

let a = null;  // null
let b = 546;    // number
let c = true;      // boolean
let d = undefined;  // undefined
let e = "Avi" // string
let f = Symbol("The is a university") // symbol
let g = BigInt("57") + BigInt("3")  // BigInt
console.log(a,b,c,d,e,f,g)
console.log(typeof g)

// Object in javaScript
//non primitive data types

const item = {
    "Avi" : String,
    "age" : 24,
    "isMale" : true,
    "isFemale" : false,
    "isMarried" : false,
    "isUnmarried" : undefined,
}

console.log(item["isMarried"])
console.log(item["age"])