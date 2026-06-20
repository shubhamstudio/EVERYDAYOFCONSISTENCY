//created an object student, 
// which contains key value pairs
const student = {
    name: "Shubham",
    roll: 1000025855,
    section: "A",
    getDetails(){
        console.log(this);
        let details = [this.name, this.roll, this.section];
        console.log(details);
    }
};
student.getDetails();
