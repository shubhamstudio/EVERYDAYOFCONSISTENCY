console.log("Hello there");

let count = 0;

let id = setInterval( (a, b) => {
    return a + b;
    console.log("This side Shubham");
    count++;
    
    if (count === 2){
        clearInterval(id);
    }
}, 2000);
