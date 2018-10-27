var list1 = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2 
    "sat",  //6 = -1
];

var list2 = list1;

console.log("Before changing a value in list2")
console.log("list1 =", list1, "\nlist2 =", list2);

list2[1] = "No day";

console.log("\nAfter changing a value in list2")
console.log("list1 =", list1, "\nlist2 =", list2);

list1[5] = "Off day";

console.log("\nAfter changing a value in list1")
console.log("list1 =", list1, "\nlist2 =", list2);

// shallow copy  --> only value copy
// deep copy --> reference (memory pointer) copy

var a = 10;
var b = a;
console.log(a, b);

b = 100;
console.log(a, b);

////////////////////////////////////////
console.log("\nOnly value copy from an array:\n")

var list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2 
    "sat",  //6 = -1
];

var list2 = list.slice();

list2[1] = "No day";

console.log("After changing a value in list2")
console.log("list =", list, "\nlist2 =", list2);

// var list3 = [...list];  // in the latest java script

var list3 = Array.from(list);   // in old java script

list[5] = "Off day";
console.log(list,list3);

