// divisor
// Divisor of 10:

// var n = 100;
// for (i=1; i<=n; i++){
//     if(n%i == 0){
//         console.log(i)
//     }
// }


var n = 17;
for (i=1; i<=n/2; i++){
    if(n%i == 0){
        console.log(i);
    }
}
console.log(n);


//Finding Divisors of a number

var n = 1256;
var range = Math.ceil(Math.sqrt(n));

var divisors = "";

for (var i=1; i<=range; i++){
    if(n%i == 0){
        if(i == n/i){
            divisors = divisors + i + " ";
        }else{
            divisors = divisors + i + " " + (n/i) + " ";
        } 
    }
}
console.log("Divisors of", n, "are", divisors);
