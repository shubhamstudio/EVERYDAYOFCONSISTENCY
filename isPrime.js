let n = 10;
let div = 2;

if(n<=1){
    isPrime = false;
    console.log(isPrime);

}
else{
    for(i=2; i<n; i++){
        if(n%i===0){
            isPrime = false;
        }
        else{
            isPrime = true;
        }
    }
    console.log(isPrime);
}