// synchronous nature
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

//asynchronus nature
// setTimeout(() => {
//     console.log("Bhai");
// }, 2000);
// setTimeout(() => {
//     console.log("Ji");
// }, 2000);
// console.log("Hello");

/*
async function greet() {
  //inbuilt promise object
//   throw "some random error";
  return "Shubham Bisht";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result)
}) 
.catch((err) => {
    console.log("promise was rejected with error", err);
}) */

// let demo = async () => {
//     return 5
// }

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

const demo = async () => {
  //acync function demo()
  await getNum(); //await keyword for time
  await getNum();
  await getNum();
  await getNum();
};
