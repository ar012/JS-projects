var students = [];
addStudents(students, "Bulbul", "Ariba", "Nayeem");
console.log(students.length);

addStudents(students, "Anis", "Ashik");
console.log(students.length);

addStudents(students, "Shafina");
console.log(students.length);

// console.log(students);

function addStudents(storage, ...people){
    for(i=0; i<people.length; i++){
        storage.push(people[i]);
    }
}




/*
function dummy(...params){
    console.log("Lenth =", params.length);
    console.log(params);
    // console.log(params[1]);
}

dummy(1, 2, 3, 4);
dummy(4, 5, 6, 7, 8);
dummy(2, 10, 25, 56, 45, 0);
*/

/*
function dummy(n,...params){
    console.log("Lenth =", params.length);
    console.log(params);
    // console.log(params[1]);
}

dummy(1, 2, 3, 4);
dummy(4, 5, 6, 7, 8);
dummy(2, 10, 25, 56, 45, 0);


function dummy(n, m,...params){
    console.log("Lenth =", params.length);
    console.log(params);
    // console.log(params[1]);
}

dummy(1, 2, 3, 4);
dummy(4, 5, 6, 7, 8);
dummy(2, 10, 25, 56, 45, 0);
dummy(9, 20);
*/