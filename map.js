// let num = [1, 2, 3, 4];

// let double = num.map(function (el){
//     return el * el;
// });

// console.log(double);


let students = [{
    name: "Shubham Bisht",
    marks: 95,
},

{
    name: "Priyanshu Tiwari",
    marks: 91,
},
{
    name: "Ayush Kukreti",
    marks: 81,
}];

let cgpa = students.map((students) => (students.marks / 10));
console.log(cgpa);
