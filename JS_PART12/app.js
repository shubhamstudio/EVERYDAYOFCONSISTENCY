let jsonRes = `{"activity":"Graphic Era","availability":0.8,"type":"education","participants":1,"price":0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"https://graphql.org/","key":"2167064"}`;
let valResponse = JSON.parse(jsonRes);
console.log(valResponse);
console.log(valResponse.activity);
//JSON.parse -> JSON TO JS OBJECTS
//JSON.stringify ->JS OBJ TO JSON

let student = {
    name: "Shubham Bisht",
    marks: "90"
}

let jsonForm = JSON.stringify(student);
console.log(jsonForm);

// O/P => {"name":"Shubham Bisht","marks":"90"}
