const student = {
    name: "shubham",
    marks: 95, // Global scope
    prop: this,

    getName: function(){
        console.log(this);
        return this.name; 
    },

    getMarks: () => {
        console.log(this);
        return this.marks;
        },
    
    getInfo: function(){
        setTimeout( () => {
            console.log(this);
        }, 2000);
    }, 
    getInfo2: function(){
        setTimeout( function(){
            console.log(this);
        }, 2000);
    }
};

console.log(student.getName());
console.log(student.getInfo());
console.log(student.getInfo2());
console.log(student.getMarks());

const a = 5; //Global scope