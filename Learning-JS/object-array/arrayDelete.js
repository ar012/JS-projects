var males = ["Shamim", "Anis", "Jamal", "Rahima"];

var females = ["Shamima", "Karima"]

var lastPerson = males.pop();
females.push(lastPerson);

console.log(males, females);
console.log(males.length, females.length);


// delete an element from an array:
console.log("\ndeleting an element from an array:");

var males2 = ["Shamim", "Anis", "Rahima", "Jamal"];
console.log(males2);

var removeElelent = males2[2];
console.log(removeElelent);

delete(males2[2]);
// males2.splice(2, 1);
console.log(males2);