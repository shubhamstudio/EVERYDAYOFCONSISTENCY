let btns = document.querySelectorAll("button");
for(btn of btns){

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
};

function sayName(){
    alert("Shubham Bisht!")
};
function sayHello(){
    alert("Hello! ")
};
