// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = prompt("Enter number to delete its occurrences");

// for(i=0; i<arr.length; i++){
// if(num == arr[i]){
//     arr.splice(i, 1);
//     console.log("Deleted");
// }
// }
// console.log(arr);

// let num = prompt("Please enter your request");
// let len = (num.length);
// console.log("The length is:", len);

// let num = prompt("Please enter your request");
// let count = 0;
// let temp = num;

// while(temp > 0){
//     temp = Math.floor(temp/10);
//     count++;
// }
// console.log(count);


// let num = prompt("Please enter a number");
// let sum = 0;

// while (num>0){
//     let digit = num % 10;
//     console.log(digit);
//     sum = sum + digit;
//     num = Math.floor(num/10);
// }
// console.log("Sum of digits: ", sum);

// let num = 5;
// let fact =1;
// for(let i=1; i<=num; i++){
// fact= fact * i;
// console.log(i, fact);
// }
// console.log(`factorial of ${num} is ${fact}`);

let arr = [1, 2, 3, 4, 55, 6, 77 , 9];

let largest = 0;
for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);
