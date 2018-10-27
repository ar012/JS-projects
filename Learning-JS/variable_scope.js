
// let i = 12;
// function doSomething(){
//     let i = 20;
//     console.log("Inside the function", i);
// }

// doSomething();
// console.log("Outside the function", i);

let i = 12;
function doSomething(){
    i = 20;
    console.log("Inside the function", i);
}

doSomething();
console.log("Outside the function", i);