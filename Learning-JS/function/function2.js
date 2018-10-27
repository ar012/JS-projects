function sayHi(name = 'Anonymous'){
    console.log("Hello "+name)
}

function sayHello(name = 'Anonymous', age = 'unknown'){
    console.log("Hello " + name + ", You are " + age + " years old");
} 

sayHi();
sayHi("anis");


sayHello("rafik", 10);
sayHello("manik")