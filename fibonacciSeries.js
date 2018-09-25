// series = 0 1 1 2 3 5 8 13 21 .......

var n;
var fib1 = 0;
var fib2 = 1;
console.log("1 Fibonacci number:", fib1);
console.log("2 Fibonacci number:", fib2);
for (var i = 3; i<=10; i++){
    n = fib1 + fib2;
    console.log(i + " Fibonacci number:",n);
    fib1 = fib2;
    fib2 = n;
}