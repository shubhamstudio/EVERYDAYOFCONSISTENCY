// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data 1:", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("Data 2:", data2.fact);
//   })
//   .catch((err) => {
//     console.log("Error -", err);
//   });

//   console.log("I'm Happy")

//Using async and await method with fetch

// let url = "https://catfact.ninja/fact"

// const demo = async () => {
//     try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(res);
//     console.log(data);
//     console.log(data.fact);
//     }
//     catch(err){
//         console.log("Error -", err);
//     }
// }

// demo();

// Using Axios editing the text in Paragraph p
// let url = "https://catfact.ninja/fact"
// let p = document.querySelector("#fact");
// let btn = document.querySelector("button");

// const getFacts = async () => {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//         // p.innerText = res.data.fact;
//         // console.log(res);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log("Error -", err);
//         return "No Fact Found";
//     }
// };

// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     p.innerText = fact;
// });

let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#result");

async function getImage(){
    try{
    let res = await axios.get(url);
    return res.data.message
    }
    catch(err){
        console.log(err);
        return "No image found";
    }
}

btn.addEventListener("click", async () => {
    let link = await getImage();
    // p.innerHTML = `<img src="${link}" alt="Dog image">`;
    // img.src = link //faster than innerHTML
    //we can use img tag in html tooo 
    // or
    img.setAttribute("src", link);
})