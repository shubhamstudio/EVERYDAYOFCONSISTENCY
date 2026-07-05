// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("Form Submitted");
// })
// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value); //not innerText
// });

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.dir(form);
    
    let user = this.elements[0]; //form elements
    let pass = this.elements[1];

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");


    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});