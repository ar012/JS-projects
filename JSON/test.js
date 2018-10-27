console.log("welcome to js");

var x = myFunction(4, 3);

function myFunction(a, b){
    return a * b;
}

console.log(x);



console.log("This example calls a function to convert from Fahrenheit to Celsius:");

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}

console.log(toCelsius(77));


console.log("JavaScript Array");

var y = ['Math', 'IT', "Finance"];
console.log(y);

console.log(y[1]);