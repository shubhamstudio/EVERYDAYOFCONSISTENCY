// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";

//     console.dir(`Value of image no. ${i} is changed.`)
// }
// 
// console.dir(document.querySelectorAll("p"));
// 
// let para = document.querySelector("p");

// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);

// // console.log(para.innerText = "Hi");

// let links = document.querySelectorAll('.box a');

// for( let i=0; i< links.length; i++){
//     links[i].style.color = "purple";
// }

let h3 = document.createElement("h3");
h3.innerText = "Welcome to my page";
document.querySelector("body").append(h3);
h3.style.color = "blue";



let para = document.createElement("p");
para.innerText = "Hey i'm red";
document.querySelector("body").append(para);

para.style.backgroundColor = "yellow";

let newDiv = document.createElement("div");
newDiv.style.width= "300px";
newDiv.style.height= "300px";
newDiv.style.border= "5px solid black";
newDiv.style.backgroundColor = "pink";
document.querySelector("body").append(newDiv);
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
newDiv.append(h1);
let p = document.createElement("p]");
p.innerText = "me too";
p.style.display = "relative";
p.style.alignSelf = "left"
newDiv.append(p);