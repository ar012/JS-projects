function sayHi() {
    console.log("Welcome to java scripting learning");

}

// sayHi();
// sayHi();
// sayHi();

// passing parameter in function
function sayHello(name) {
    if (name){
        console.log('Hello ' + name);
    }else
        console.log("How are you?");
}


sayHello('manik');
sayHello("anis");
sayHello('');
sayHello();

console.log("\nChecking even or not:");
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}


console.log(isEven(12));
console.log(isEven(101));

//Parameter and Arguments of a function
function add(x,y){      //Here x and y are parameters of the function add
  return x+y;
}
console.log(add(20,30));   //Here 2 and 3 are arguments of the function add
