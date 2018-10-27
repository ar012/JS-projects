var name = "Abdur Razzak";
console.log(name);

var age = 28;
console.log(age);


var subject = ['math', 'english', 'bangla'];

// console.log(subject);

console.log(subject[0]);
console.log(subject[1]);


// JavaScript Datatype: number, string, boolean, undefined, null, Array, object, function


var ans = true;

console.log(typeof(ans));
console.log(typeof(subject));

console.log(typeof name);
console.log(typeof age);

var anythink = null;
var somthink;
console.log(anythink == somthink);
console.log(anythink === somthink);
console.log(anythink == null);

var zero = '';
console.log(zero == null);


console.log("Boolean Test");

console.log(100 == '100');
console.log(100 === '100');
console.log('100' == '100');
console.log(100 == 100);

var country = 'Bangladesh';

console.log(country.toUpperCase());

var nice = "Beautiful Country";
console.log(nice.toUpperCase());
console.log(nice.toLowerCase());


var subject = ['math', 'english', 'bangla'];

for (var i=0; i<subject.length; i++) {
    console.log(subject[1].toUpperCase());
    
}



