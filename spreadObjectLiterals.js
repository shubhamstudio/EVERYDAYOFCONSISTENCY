let data = {
    email: "shubhambisht@zohomail.in",
    pass: 79761
};

// converting key value pairs of objects
// to spreading them
let dataCopy = {...data, username: "shubham"};
console.log(dataCopy);

//converting arr to spreading object

let arr = [2, 3, 4, 5, 6]; //only value
let newarr = {...arr}; //obj -> key: value

//arr only has values not a key so they
//are stored in objects with their indexes
console.log(newarr);