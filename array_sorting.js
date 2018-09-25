
var list = [
    "a",
    "s",
    "d",
    "b",
    "x",
    "a",
    "g",
];

list.sort();
console.log(list);

var list = [1, 3, 4, 56, 11, 34, 16, 44, 22, 20, 39, 30];

list.sort();
console.log(list);

console.log(11>2)
console.log("11">"2")

// swap
var a = 5, b = 7;
console.log(a,b);

// var c = a;
// a = b;
// b = c;

[a, b] = [b, a]
console.log(a,b);

var list = [1, 3, 4, 56, 11, 34, 16, 44, 22, 20, 39, 30, 7, 100, 52];

var length = list.length-1;

for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
        if(list[j] > list[j+1]){
            [list[j], list[j+1]] = [list[j+1], list[j]]; 
        }
    }
};

console.log(list);
