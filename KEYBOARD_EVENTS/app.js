// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event){
//     console.log(event);
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("Button Clicked");
// });

// Keyboard Events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", (event) => {
//     console.log(`Key = ${event.key}`);
//     console.log(`Code = ${event.code}`);
//     // console.log(event);
//     console.log(event.key, "Key was pressed");
// });


// inp.addEventListener("keyup", function(){
    //     console.log("key was released")
    // });
    
    
    let inp = document.querySelector("input");
    
    inp.addEventListener("keydown", (event) => {
        console.log("Code =", event.code);
        console.log(`Key = ${event.key}`);
        if(event.code == "KeyW"){
        console.log("character moves forward");
        }
        else if(event.code == "KeyS"){
        console.log("character moves backward");
        }
        else if(event.code == "KeyA"){
        console.log("character moves left");
        }
        else if(event.code == "KeyD"){
        console.log("charcter moves right");
        }
    });