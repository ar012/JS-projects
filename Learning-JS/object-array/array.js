// JS array example 01

var fruits = ["apple", "mango", "banana", "orrange", "grape"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

// index or offset
console.log(fruits[4]);

// fruits[4] = "pulm";
// console.log(fruits[4]);

// console.log(fruits);

console.log("The length of the array fruits is",fruits.length)

var lastOffset = fruits.length - 1;
console.log(fruits[lastOffset]);

// JS array example 02

var subject = [];

console.log(typeof subject);

var names = ['Arif', 'Maruf', 'Nasir'];
console.log(typeof names);

console.log(names.length);
console.log(names[1]);
// console.log(names[]);

console.log(names[names.length - 1]);

console.log(names.indexOf('Maruf'));

console.log(typeof(subject));



var x = names.length;
var y = names.sort();
console.log(x);
console.log(y);
