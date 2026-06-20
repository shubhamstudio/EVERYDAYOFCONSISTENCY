const square = (n) => {
    return n*n; // slightly faster 
    // or n**2
}
// console.log(square());

// or

const sq = (n1) => (n1*n1); //for returning single value
let num = 1;

// console.log(`The square of ${num} is:`, sq(num));

//Q2: Print hello 5 time with interval of 2s

console.log("Do Eat, Code, Sleep");

// let count = 0;
// let id = setInterval( () => {
//     console.log("Repeat!");
//     count++;

//     if(count === 5){
//         clearInterval(id);
//         return;
//     }
// }, 2000);

// or
let id = setInterval( () => {
    console.log("Repeat!");
}, 2000);

setTimeout( () => {
    console.log("Clear interval ran");
    clearInterval(id);
}, 10100);
