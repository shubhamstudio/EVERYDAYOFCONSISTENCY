let favMovie = "dhurandar";
let guess = prompt("Enter your fav movie: ");
while(guess != favMovie){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }
    console.log("Wrong");
    guess = prompt("Guess again")
}

if(guess == favMovie){
    console.log("congrats!")
}