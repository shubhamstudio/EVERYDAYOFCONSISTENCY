

// Property = (key, value) pair
// objects are collection of properties

//  key  =   value
// let name = "shubham";
// let age = 19;
// let sgpa = 8.19;

// // In this case Object = Student

// //Creating object literal

// let student = {
//     name: "shubham",
//     age: 19,
//     sgpa: 8.19
// };
// console.log(student);

// const item = {
//     price: 2000,
//     discount: 50,
//     colors: ["pink", "blue"]
// };
// console.log(item);

// add/ update object literals

const student = {
    name: "Shubham",
    age: 19,
    sgpa: 8.19,
    grade: "A+",
    city: "Dehradun" 
};
console.log("Default city: ", student.city);
let updation = (student.city = "Kotdwar");
console.log("Updated city: ", updation);

//Adding a key with its value in object literal
let gen = (student.gender = "Male");
console.log(student); //Added
//Deletion
delete student.grade;
console.log(student);
