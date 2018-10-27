// Function declaration
function add(a, b) {
    return a+b;
}
console.log(add(10, 40));  
// function add(a, b) {
//     var c = a+b;
// }
// console.log(c);


// Function expression
var sub = function(x, y) {
    return x - y;
}
console.log(sub(50, 30));

var subtraction = sub;
console.log(subtraction(400, 300));

// Callback Function
var subject = ['math', 'english', 'bangla', 'arabic', 'history'];

console.log("Callback Function:");

// subject.forEach(function(sub) {
//     console.log(sub)
// })

subject.forEach(mysub);


function mysub(sub) {
    console.log(sub);
}