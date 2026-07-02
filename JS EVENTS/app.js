// let btn = document.querySelector("button");

// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked!")
// } Inefficient way

// Efficient way
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayClick; 
}

function sayClick(){
    alert("Button was clicked")
}