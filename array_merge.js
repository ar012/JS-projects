var list1 = [
    "sun",
    "mon",
    "tue",
    "wed",
];

var list2 = [
    "thu",
    "fri",
    "sat",
];

var list = list1.concat(list2);
console.log(list);

// var list3 = list2.concat(list1);
// console.log(list3);

console.log("\nMultiple array concatenation:\n")
var li1 = [1,2,3];
var li2 = [4,5,6];
var li3 = [7, 8, 9, 10];

// var li = li1.concat(li2).concat(li3);

// var li = li1.concat(li2, li3);

var li = [].concat(li1,li2,li3);
console.log(li)