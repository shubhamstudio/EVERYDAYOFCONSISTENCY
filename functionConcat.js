let string = ["Hello", "Bhaiyya", "Ji"]; 

function concat(arr) { 
  let result = ""; 
  for(let i = 0; i < arr.length; i++){ 
    result += arr[i]; 
  } 
  return result; 
} 

console.log(concat(string)); 
