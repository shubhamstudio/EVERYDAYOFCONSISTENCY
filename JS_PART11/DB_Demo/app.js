function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Shubham Bisht",
  () => {
    console.log("success: Your data was successfully saved");
    savetoDb(
      "Hello",
      () => {
        // success msg
        console.log("success 2: data2 saved");
        savetoDb(
          "Game Changer",
          () => {
            console.log("success 3: data3 saved");
          },
          () => {
            console.log("failure 3: weak connection");
          },
        );
      },
      () => {
        console.log("failure 2: weak connection");
      },
    );
  },
  () => {
    console.log("failure: Weak Connection, data not saved");
  },
);
