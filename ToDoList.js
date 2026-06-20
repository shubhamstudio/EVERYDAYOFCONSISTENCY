let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("You are quitting the app");
        break;
    }

    if(req == "list"){
        console.log("--------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("--------------------");
    }

    else if(req == ("add" || "Add" || "ADD")){
        let task = prompt("Enter tasks");
        todo.push(task);
        console.log("Task added")
    }
    
    else if(req == "delete"){
        let idx = prompt("please enter the index you want to delete")
        todo.splice(idx, 1);
        console.log("task deleted")
    }

    else{
        console.log("Wrong request");
    }
    
    req = prompt("Please enter your request");
}