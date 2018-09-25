// s0 = 1 2 3 4 5 6 7 8 9 .......

// s1 = 2 4 6 8 10 12 14 16 .....

// s2 = 1 4 7 10 13 16 19 ........

// s3 = 0 3 8 24 35 48 ...........

// s4 = 1 4 3 8 5 12 7 16 9 20 .........

// s5 = 0 1 1 2 3 5 8 13 21 34 ..........  fibonacci series


//Solution:
// s0 = 1 2 3 4 5 6 7 8 9 .......
var series;
var n = 10;
for (var i=1; i<=n; i++) {
    console.log(i);
}

// s1 = 2 4 6 8 10 12 14 16 .....
var series;
var n = 10;
for (var i=1; i<=n; i++) {
    series = i*2;
    console.log(series);
}
//console.log(typeof(series));

//OR
var series = "";
var n;
for (var i=1; i<=10; i++) {
    n= i*2;
    series = series + n + " ";
}
console.log("Series 1 =", series);
//console.log(typeof(series));

// s2 = 1 4 7 10 13 16 19 ........
// var series = "1 ";
var series = "";
var n = 1;
for (var i=1; i<=10; i++) {
    //n= n+3;
    series = series + n + " ";
    n = n + 3;
}
console.log("Series 2 =", series);
/*
//OR
var series = "1 ";
var n = 1;
for (var i=1; i<=10; i++) {
    n = n + 3;
    series = series + n + " ";
}
console.log("Series 2 =", series);
*/

// s3 = 0 3 8 24 35 48 ...........
var series = "";
var n;
for (var i=1; i<=10; i++) {
    n= i*i-1;
    series = series + n + " ";
}
console.log("Series 3 =", series);


// s4 = 1 4 3 8 5 12 7 16 9 20 ......... fibonacci series
var series = "0 1 ";
var n = 0;
var x = 0;
var y = 1;
for (var i=1; i<10; i++) {
    n = x+y;
    x = y;
    y = n;
    series = series + n + " ";
}
console.log("Series 5 =", series);