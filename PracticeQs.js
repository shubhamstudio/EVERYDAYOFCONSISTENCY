// let num = 50;
// if (num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }


// let userName = prompt("Enter username");
// let age = prompt("Enter your age");
// alert(userName + " is " + age + " years old");



// let quarter=1;
// switch(quarter){
//     case 1 :
//         console.log("Months in Quarter 1 : January, Februrary, March");
//     case 2 :
//         console.log("Months in Quarter 2 : April, May, June");
//     case 3 :
//         console.log("Months in Quarter 3 : July, August September");
//     case 4 :
//         console.log("Months in Quarter 4 : October, November, December");
//         break;
//     default :
//         console.log("Wrong number entered");
// }




// let str = "Avantika";

// if((str[0]=="a" && str.length>5) || (str[0]=="A" && str.length>5)){
//     console.log(`Golden string is : ${str[0]} `);
// }

// else{
//     console.log("Not a golden string"); 
//     }


// let a = 122;
// let b = 124;
// let c = 6;

// if(a>b){
//     if(a>c){
//     console.log(a, " is largest");
//     }
//     else{
//         console.log(c, " is largest");
//     }
// }
// else {
//     if(b>c){
//     console.log(b, " is largest");
//     }
//     else{
//         console.log(c, " is largest");
//     }
// }

let num1 =444;
let num2 = 47844;

if((num1%100) == (num2%100)){
    console.log(`numbers have the same last digit which is ${num1%100}`);
}
else{
    console.log("number don't have the same last digit");
}
 
//Use %10 to find the last digit is same or not.
//Use %100 to find the last 2 digits are same or not.