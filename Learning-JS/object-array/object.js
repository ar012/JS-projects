// JavaScript Object example 01

var car = "Fiat";
console.log(car);


var car2 = {type:"BMW", model:"500", color:"White"};

console.log(car2);

// Accessing Object Properties
console.log("Car type is", car2.type);

console.log("Car color is" + " " + car2.color);

console.log("Car model is", car2["model"]);


// JavaScript Object example 02


var person = {
    name: 'Abdur Razzak Khamaru',
    email: 'a.razzak660@gmail.com',
    skills: ['Networking', 'System administration', 'Programming', 'Data Science', 'Machine Learning' ],
    print: function() {
        console.log(this.name, this.skills);
    }
}

// person.print();

// console.log(person.name);
// console.log(person['email']);


for (var i in person) {
    console.log(person[i]);
}



// var company = {};
// company.name = 'Khamaru Group';
// company.branch = ['selftics', 'khamarur khamar', 'khamaru hospital'];
// company.age = '6Y';
// company.print = function() {
//     console.log(this.name + ' ' + this.age);
// };

// company.print();

// console.log(company);

// //Compay branch
// console.log(company.branch)
