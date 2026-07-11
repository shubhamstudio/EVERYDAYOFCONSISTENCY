let h1 = document.querySelector("h1");

const changeColor = (color, delay, nextColorChange) => {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
};

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("pink", 1000);
        });
    });
});
// callback nesting -> callback hell 

// changeColor("orange", 2000);
// changeColor("green", 3000);

//this is called an efficient way of programming