const express = require('express');
const app = express();
const port = 3000
// console.dir(app);
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

//GET request Express
app.get('/', (req, res) => {
    res.send("Hello, this is root dir");
    console.log("Hello, this is root dir");
});

// username and id
app.get('/:username/:id', (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page @${username}</h1>`
    res.send(htmlStr);
    console.log(req.params);
});

//search toogle
app.get('/search', (req, res) => {
    let { q } = req.query;
    if (!q) {
        return res.send("nothing searched");
    }
    res.send(`search results for ${q}`);
    console.log(req.query);
});



app.get('/apple', (req, res) => {
    res.send("You are in the apple path");
    console.log("Apple request received!");
});
app.get('/*splat', (req, res) => {
    res.send("This path doesn't exist");
    console.log("Unknown route request received!");
});

//POST request Express
app.post('/', (req, res) => {
    res.send("Your sent a post request to root");
    console.log("Root request sent!");
});
app.post('/*splat', (req, res) => {
    res.send("Your sent a post request to root");
    console.log("Root request sent!");
});

// app.use('/', (req, res) => {
//     let code = ("<h1>Fruits</h1> <ul><li>apple</li><li>banana</li></ul>");
//     res.send(code);
//     console.log("Request received!");
// });

// res.send({
//     name: "apple",
//     color: "red",
// });
// console.log(req);

