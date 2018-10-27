// for ( initialization; condition; stepping/increament)

var i;
for ( i = 0; i <= 10; i++ ) {
  console.log(i);
}

console.log("\n infinite for loop");

var i;
i = 0;
for (;;) {
  i++;
  console.log(i);
  if ( 10 == i) {
    break
  }
}

console.log("\n infinite for loop");

var i;
for ( i = 0; true ; i++) {
  console.log(i);
  if ( 10 == i) {
    break
  }
}
