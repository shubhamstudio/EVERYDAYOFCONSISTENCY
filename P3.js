/*let com = "Hello Bhai";
let newMsg = com.toUpperCase();
console.log(newMsg, com.indexOf("Bhai"));*/
//method chaining, str.UpperCase, lower, trim.

let str = "hello Bhai";
// let newStr = str.slice(5,9);
// or
let newStr = str.slice(5, str.length);
// or
let newStr1 = str.slice(4);

console.log(newStr.slice(-3));

let newMsg = str.replace("Bhai","Bhai ji");
console.log(newMsg);

let newRepeat = newStr1.repeat(5);
console.log(newRepeat);