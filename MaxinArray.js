// let arr = [11, 22, 99, 77, 999, 88];
// let max = -1;

// arr.forEach((el) => {
//     if(max < el){
//         max = el;
//     }
// });

// console.log(max);

let arr = [11, 22, 99, 77, 999, 88];

let result = arr.reduce((max, el) => {
    if(max < el){
        return el;
    }
    else{
    return max;
    }
});

console.log(result);
