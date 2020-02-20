//Using constructor function
function Student(name, section, age){
    this.name = name;
    this.section = section;
    this.age = age;
}

let s1 = new Student("Cathy Garcia", "2ITE", 19);
console.log(`The age of ${s1.name} is ${s1.age}`);