function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
//passing arguments for name and age
// printInfo("Shubham", 19);

function sum(a, b){
    console.log(`The sum of a + b is, ${a+b}`);
}
//passing arguments for sum of 2 numbers
// sum(55,45);


//fuction that gives us the avg of 3 numbers
function calcAvg(a, b, c){
    console.log("The average of numbers are:", (a+b+c)/3);
}
// calcAvg(3, 2.5, 3.5);

//fuction to print multiplication table

function mulTable(a){
    console.log(`The multiplication table of ${a}`);
    for(let i = 1; i<=10; i++){
        console.log(`${a} x ${i} =`, i*a);
    }
}

// mulTable(25);


// using return
function sum(a,b){
    return a + b;
}

// console.log(sum(sum(1,2), 3));

function sumOfNum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}
// sumOfNum(10);

