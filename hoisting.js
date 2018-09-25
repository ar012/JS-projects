// JavaScript Hoisting



console.log(a);
var a = 5;


a = 5
console.log(a);
var a;


function hello(){
  return "Hello World!";
}
console.log(hello());
