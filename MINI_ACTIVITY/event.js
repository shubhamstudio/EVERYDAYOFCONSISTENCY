let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow"
}
btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);