//Odd Numbers
// for(let i=1;i<=15;i=i+2){
//     console.log(i)
// }

// for(let i=15;i>=1;i=i-2){
// console.log(i);
// }

//Even Numbers
// for(let i=2;i<=10;i=i+2){
//     console.log(i)
// }

//backwards
// for(let i=10;i>=2;i=i-2){
//     console.log(i)
// }

// Multiplicaton table of 5

// for(i=5;i<=50;i=i+5){
//     console.log(i);
// }

// let n = prompt("Enter a number");
// n = parseInt(n);

// for(i = n; i<=n*10; i=i+n){
//     console.log(i);
// }

// let n = prompt("Enter a number");
// n = parseInt(n);

// for(let i=1; i<=10; i++){
//     console.log(i*n);
// }

// nested for

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i;j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

// for(i=1; i<=3; i++){    
//     for(j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// for(i=1; i<=5; i++){
//     for(j=1;j<=i;j++){
//         console.log(j);
//     }
//     process.stdout.write("\n");
// }

for(i=1; i<=5; i++){
    for(j=1; j<=5-i; j++){m 
        process.stdout.write(" ");
    }
    for(j=1; j<=i; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}