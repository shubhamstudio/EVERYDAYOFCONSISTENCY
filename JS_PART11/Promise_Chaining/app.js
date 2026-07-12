function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
} //resolve -> success, reject -> failure
//req = promise object let request =
// savetoDb("growthgen")
//   .then(() => {
//     console.log("data1 saved, promise was resolved");
//     savetoDb("growthgen")
//     .then(() => {
//         console.log("data2 saved, promise was resolved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//Improved Version
savetoDb("growthgen")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise", result);
    return savetoDb("what's up");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise", error);
  });
