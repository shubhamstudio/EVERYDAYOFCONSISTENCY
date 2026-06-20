// WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber.
// let arr = [5, 6, 8, 243, 5 ,56, 56, 8, 9, 67];
// let num = 4;
// function getElements(arr, num){
//     for (let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr, num);


// WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.
// let str = "abcdabcdefgggh";

// function uniCharacters(str){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currentChar = str[i];
//         if(ans.indexOf(currentChar) == -1){
//             ans = ans + currentChar;
//         }
//     }
//     return ans;
// }

// uniCharacters(str);

// WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput

// let country = ["Australia", "India", "Bangladesh"];

// function longestCountry(country){
//     let ansIndex = 0;
//     for(i = 0; i < country.length; i++){
//         let ansLength = country[ansIndex].length;
//         let currLength = country[i].length;
//         if(currLength > ansLength){
//             ansIndex = i;
//         }
//     }
//     return country[ansIndex];
// }
// console.log(longestCountry(country));

// calculate vowels in the sentences


// let word = "ShubhamBisht";

// function checkVowels(word){
//     let count = 0;
//     for(i = 0; i < word.length; i++){
//     if(
//         word.charAt(i) == "a" ||
//         word.charAt(i) == "e" ||
//         word.charAt(i) == "i" ||
//         word.charAt(i) == "o" ||
//         word.charAt(i) == "u"
//     ){
//         count++;
//     }
//     }
//     return count;
// }

// console.log(checkVowels(word));

//Generate a random number


let start = 100;
let end = 200;

function randomGenerate(start, end){
    let difference = end - start;
    return Math.floor(Math.random() * difference) + start;
}
console.log(randomGenerate(start, end));

// Wrong one
// let randNum = 0;

// function rnGenerator(randNum){
//     let count = 0;
//     for( i=0; i < 10; i++){
//         randNum = Math.random();
//         count++;
//     }
//     return count;
// }
// console.log(rnGenerator(randNum));