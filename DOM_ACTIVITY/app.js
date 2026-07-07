let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    // console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;


    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete" //adds text in button
    dltBtn.classList.add("delete"); //add class

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
       let listItem = event.target.parentElement;
    //    console.log(listItem);
    listItem.remove(); //deleted
    console.log("deleted")
    }
})





// let dltBtns = document.querySelectorAll(".delete");

// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);   
//         par.remove();
//     });
// }