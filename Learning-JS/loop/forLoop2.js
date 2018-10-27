var i;
for (i = 0; i <= 10; i += 2) {
    console.log(i);
}

// infinite loop

var j;
j = 0;
for ( ; ; ) {
    j++;
    console.log(j);
    // j++;
    if (10==j) {
        break;
    } 
}