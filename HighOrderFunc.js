function multipleGreet(func, count){ //high order function
    for(let i = 1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

console.log(multipleGreet(greet, 10));

