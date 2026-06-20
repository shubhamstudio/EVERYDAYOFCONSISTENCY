const maxNum = prompt("Enter the max number");
let random = Math.floor(Math.random() * maxNum) + 1;

let user = prompt("Enter the correct number");

while(true){
    if(user == "quit"){
        console.log("You are quitting the game");
        break;
    }
    if(user == random){
        console.log("Congrats! it's correct! random number was:", random);
        break;
    }

    else if(user < random){
        user = prompt("Hint: your guess was too small");
    }

    else {
        user = prompt("Hint: your guess was too large. please try again");
    }
}