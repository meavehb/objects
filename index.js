//Using factory function
//createStudent is a factory function
function createStudent(name, section, age){
    let stud = {};
    stud.name = name;
    stud.section = section;
    stud.age = age;
    return stud;
}

let s1 = createStudent("Pedro Morales", "2ITE", 20);
document.write(`<h1>${s1.name}, ${s1.age}, is enrolled in ${s1.section}</h1>`)