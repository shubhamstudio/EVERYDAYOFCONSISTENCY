const classInfo = {
    shubham : {
        sgpa: 8.19,
        city: "Kotdwar",
        grade: "A+"
    },
    Priyanshu : {
        sgpa: 7.79,
        city: "Urai"
    },
    Ayush : {
        sgpa: 7.3,
        city: "Kotdwar"
    }
};
console.log(classInfo);
console.log("City of shubham: ", classInfo.shubham.city);

delete classInfo.shubham.grade;
console.log("Grade deleted: ", classInfo.shubham);