//Using ES6
class Student{
    constructor(name, section, age){
        this.name = name;
        this.section = section;
        this.age = age;
    }
}

let stud1 = new Student("Alvin Reyes", "2ITE", 18);
document.write(`<h2>${stud1.name} is enrolled in ${stud1.section}</h2>`);