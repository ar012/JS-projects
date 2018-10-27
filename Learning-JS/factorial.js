
var n = 5;
var factorial = 1;

for (var i=n; i>1; i--) {
    factorial = factorial * i;
    // factorial *=i;
}
// console.log(factorial);
// console.log("Factorial of " + n + " is " + factorial);
console.log("Factorial of", n, "is",factorial);
// 
var n = 6;
var fact = 1;
var i;
for (i=2; i<=n; i++) {
    fact = fact * i;
    // factorial *=i;
}
// console.log(factorial);
console.log("Factorial of", n, "is",fact);