// let arr = [2, 4, 6, 8];
// let sqr = arr.map((el) => (el * 2));
// console.log(sqr);
// let sum = sqr.reduce((sum, el) => (sum + el));
//                     //0,  2
// console.log(sum);
// let avg = sum / arr.length;
// console.log(avg);

// let arr = [2, 4, 6, 8];

// let newArr = arr.map((el) => (el + 5));
// console.log(newArr);

// let arr = ["Shubham", "Priyanshu", "Ayush"];
// let newArr = arr.map((el) => (el.toUpperCase()));
// console.log(newArr);


// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2),];
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

const mergeObjets = (obj1, obj2) => ({...obj1, ...obj2});
let call = mergeObjets({
    name: "Shubham",
    sap: 225855,
},
{
    course: "BCA",
    section: "A",
});

console.log(call);