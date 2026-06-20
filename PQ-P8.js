// check every elmts is multiple of 10

// let elements = [ 20 ,30, 10, 50, 50, 70];

// let result = elements.every((el) => {
//     if(el % 10 ==0){
//         return true;
//     }
//     else{
//         false
//     }
// });

// console.log(result);


// create a function to find the min number in an array

function getMin(arr){
    let result = arr.reduce((min, el) => {
        if(min < el){
            return min;
        }
        else{
            return el;
        }
    });
    console.log(result);
}

let arr = [11, 10, 700, 5];

console.log(getMin([-50, -99, 1, 0]));

