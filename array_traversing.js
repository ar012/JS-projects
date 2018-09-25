
var list = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
];

// for(var i=0; i<list.length; i++){
//     console.log("Element at", i, "offset is", list[i])
// };


// var length = list.length;  // only one time calculate
// for(var i=0; i<length; i++){
//     console.log("Element at", i, "offset is", list[i])
// };

for (i in list){
    console.log("Element at", i, "offset is", list[i])
};

// print in reverse order

console.log("\nprinting in reverse order")

var length = list.length;
for(var i=(length -1);  i>=0; i--){
    console.log("Element at", i, "offset is", list[i])
};


