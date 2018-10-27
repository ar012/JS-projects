// function helloLearner(){
//   console.log("Welcome to Selftics");
// }
//
// helloLearner()
// helloLearner()


// function helloLearner(){
//   return "Hello World!";
// }
//
// helloLearner()
// helloLearner()


function helloLearner(name){
  console.log("Hello "+ name +"!"+" Welcome to Selftics.");
}

helloLearner("Anis");
helloLearner("Rashed");
helloLearner();
helloLearner("");


// Applying condition:
function welcome(name){
  if(name){
    console.log("Welcome "+name);
  }else {
    console.log("How are you?");
  }
}

welcome("Rafiq");
welcome(' ');
welcome('');
welcome();

// Passing a default value of the parameter
function welcome(name="Anonymous"){
  console.log("Hello "+name);
}

welcome("Rafiq");
welcome(' ');
welcome('');
welcome();

// Passing multiple parameters
function hi(name="Anonymous", age="unknown"){
  console.log("Hi "+name+", you are "+age+" years old.");
}

hi("Rafiq", 20);
hi();
hi("",);




console.log("\nChecking even or not:");
function isEven(number){
  if(number % 2 == 0){
    return true;
  }
  return false;
}

//Calling isEven Function
console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(18));
