var myList = ["apple", "orange", "pineapple"];

console.log(myList);


console.log(myList.length);

// myList[myList.length] = "grape"

// console.log(myList);


// console.log(myList.length);


//// elents adding in an array:

myList.push("plum");  // add an element to last

myList.unshift("banana"); // add an element to first

console.log(myList);

///// removing element from an array:
lastElement = myList.pop();     // remove and return the last element from an array
console.log(myList);
console.log(lastElement);

var list2 = [1, 2, 3, "a", "e", "i", "o"];
console.log(list2);
list2.pop();
last_element = list2.pop();
console.log(list2);
console.log(last_element);

console.log(list2.length);

firstElement = list2.shift();   // remove and return the first element from an array

console.log(list2);
console.log(firstElement);

console.log(list2.length);


