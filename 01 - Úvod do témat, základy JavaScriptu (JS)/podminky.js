let condition = false;

if (condition) {
    console.log("Podminka je true");
} else {
    console.log("Podminka je false");
}

let a = 5

if (a> 5) {
    console.log("A je větší než 5")
} else if (a < 5) {
    console.log("A je menší než 5")
} else if (a === 5 ) {
    console.log("A se rovná 5")
}

let c = 10
let b = 11

console.log(c === b && c === 10)
console.log(c === 10 || c === b)


let isDay = true

if (!isDay) {
    console.log("Je noc!")
} else {
    console.log("Je den!")
}