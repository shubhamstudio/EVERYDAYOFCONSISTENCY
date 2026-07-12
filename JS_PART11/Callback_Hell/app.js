let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if(num > 3){
        reject("promise rejected")
      }
      h1.style.color = color;
      resolve("Color Changed!");
    }, delay);
  });
}

async function ColorChanger() { 
 try{
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
 }
 catch(err){
  console.log("error caught: ", err);
 }


let a  = 5;
console.log(a);
console.log("new number =", a + 3);
}
// improved but not efficient inplace of await and async
// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//   });

// not efficient way
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("pink", 1000);
//         });
//     });
// });
// callback nesting -> callback hell

// changeColor("orange", 2000);
// changeColor("green", 3000);

//this is called an efficient way of programming
