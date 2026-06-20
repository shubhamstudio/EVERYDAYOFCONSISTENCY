// function sum(...args){
//     for(i = 0; i < args.length; i++){
//         console.log("you give us: ", args[i]);
//     }
// }

// sum(1,3,4,4,5,5,6,6,7);

// function min(a, b, c, d){
// function min(){ //not arguments => collections
//     console.log(arguments);
//     console.log(arguments.length );
// }

// min(1, 2, 3, 4);

// that's why we need rest

function sum(...args){
    return args.reduce((sum, el) => sum + el);
}
const myNumbers = [1, 2, 3];
console.log(sum(...[1, 2, 3]));