//Using apply
let s1 = {fname: "Juan", lname: "Dela Cruz"};
let s2 = {fname: "Pedro", lname: "Reyes"};

let info = ["2ITE", 19];

function createInfo(section, age){
    console.log(`${this.fname} ${this.lname}, ${age}, is enrolled in ${section}`);
}

createInfo.apply(s1, info);