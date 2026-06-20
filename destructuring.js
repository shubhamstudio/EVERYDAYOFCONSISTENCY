let names = ["tony", "bruce", "captain", "xyz", "abc"];
let [winner, runnerUp, ...others] = names;

console.log(others);
console.log(winner);