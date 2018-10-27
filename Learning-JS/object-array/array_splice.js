var list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2 
    "sat",  //6 = -1
];

var chunk = list.slice(1, 4);
console.log(list, chunk);

// var chunk2 = list.slice(3, 5);

var chunk2 = list.slice(3);
console.log("chunk2 is", chunk2);

// find out last three elements from an array:

// var arrayLength = list.length;
// console.log(arrayLength);

// var chunk3 = list.slice(arrayLength-3);
// console.log("chunk3 is", chunk3);

var chunk4 = list.slice(-3);

// var chunk4 = list.slice(-5, -3);
console.log("chunk4 is",chunk4);