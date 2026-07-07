let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("div was clicked")
});
ul.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("ul was clicked")
});

for(list of lists){
    div.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li was clicked")
});
}