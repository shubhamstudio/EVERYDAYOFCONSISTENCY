// spreading the elements

// console.log(..."shubham");

// ... -> spread

// let arr = [11, 1, 0, 25, 36, -1];
// let minimum = Math.min(...arr);
// console.log(minimum);

// let arr1 = [11, 1, 0, 25, 36, -1];
// console.log(...arr);

let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7];

let nums = [...odd, ...even];

console.log(...nums);