// synchronous nature
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three(); 



//asynchronus nature
setTimeout(() => {
    console.log("Bhai");
}, 2000);
setTimeout(() => {
    console.log("Ji");
}, 2000);
console.log("Hello");
