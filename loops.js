// let names = ["Shubham", "Priyanshu", "Ayush"];

// for(i=0; i<names.length-1; i++){
//     console.log(i, names[i]);
// }

// for (let i = 2; i>=names.length-3; i--){
//     console.log(i, names[i]);
// }

// find largest number

// let num = [3, 44, 5, 66, 77, 8];

// let largest = num[0];
// for(let i = 0; i<num.length; i++){
    // if(num[i] > largest){
//         largest = num[i];
//     }
// }
// console.log(largest);


// find even numbers
// let arr = [3, 7, 2, 9, 6, 4];
// let even = 0;
// for(i = 0; i < arr.length; i++){
    //     if(arr[i]%2==0){
        //         console.log(arr[i]);
        //         even++;
        //     }
        // }
        // console.log("Total even numbers:", even);
        

// find the sum of  even numbers

// let arr = [3, 7, 2, 9, 6, 4];
// let evenSum = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//         evenSum += arr[i];
//     }
// }
// console.log("The sum of even numbers are:", evenSum);


//find largest from the array from even numbers 

let arr = [1, 7, 2, 9, 6, 4];
let largest = 0;

for (let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    if(arr[i]> largest){
        largest = arr[i];
    }
}
}
console.log("Largest even number is:", largest);