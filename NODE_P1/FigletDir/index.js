const figlet = require("figlet");

figlet("Shubham Bisht", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.log(err);
        return;
    }
    console.log(data);
});