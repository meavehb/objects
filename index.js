//Using prototype (example 2)
function Student(name, section, age){
    this.name = name;
    this.section = section;
    this.age = age;
}

    //Student.prototype.study = (subject) => {
        //console.log(`${this.name} is studying ${subject}`)};

    Student.prototype.study = function(subject) {
        console.log(`${this.name} is studying ${subject}`)};

    Student.prototype.school = "UST";

let s1 = new Student("Cathy Garcia", "2ITE", 18);
let s2 = new Student("Pedro Morales", "2ITA", 21);
let s3 = new Student("Juan Dela Cruz", "2ITC", 20);

document.write(`S1: ${s1.name}, ${s1.section}, ${s1.age}<br>`);
document.write(`S2: ${s2.name}, ${s2.section}, ${s2.age}<br>`);
document.write(`S3: ${s3.name}, ${s3.section}, ${s3.age}`);

s1.study("ICS2609");
s2.study("ICS2608");
console.log(`${s3.name} studies at ${s3.school}`);