// prime number less than 10
// 2 3 5 7
/*
var n = 13;
if (n < 10){
  if (2 == n || 3 == n || 5 == n || 7 == n ){
    console.log("This number",n,"is smaller then 10 and it's a prime number");
  } else {
    console.log("This number",n,"is smaller then 10 and it's NOT a prime number");
  }
} else {
  console.log("This number",n, "is greater than 10");
}
*/

var n = 23;
if (n < 10 && (2 == n || 3 == n || 5 == n || 7 == n )){
  console.log("This number",n,"is smaller then 10 and it's a prime number");
} else if(n < 10){
    console.log("This number",n,"is smaller then 10 and it's NOT a prime number");
} else {
  console.log("This number",n, "is greater than 10");
}
