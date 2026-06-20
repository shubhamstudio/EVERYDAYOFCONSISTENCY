// let num = [ 1, 2, 3, 4];

// let even = num.filter((num) => (num%2==0));

// console.log(even);

let students = [{
    name: "Shubham Bisht",
    marks: 95,
    age: 19
},

{
    name: "Priyanshu Tiwari",
    marks: 91,
    age: 22
},
{
    name: "Ayush Kukreti",
    marks: 81,
    age: 20
},
{
    name: "Sujal Bisht",
    marks: 96,
    age: 17
}];

let eligbleStudents = students.filter((el) => (el.age >=18 && el.marks >=95));
console.log(eligbleStudents);



//     if(el.age >=18 && el.marks >=85){
//     return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(eligbleStudents);