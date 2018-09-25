var list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2 
    "sat",  //6 = -1
];

// var chunk = list.splice(2, 4);
// var chunk = list.splice(-4);
var chunk = list.splice(-4, 3);
console.log(list, chunk);


// var chunk2 = list.splice(-4, 2);
// console.log(list, chunk2);
