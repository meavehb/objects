//Using call
let s1 = {name: "Juan Dela Cruz", section: "2ITE", age: 22};
let s2 = {name: "Cathy Garcia", section: "2ITA", age: 20};

function displayInfo(){
    console.log(`${this.name}, ${this.section}, ${this.age}`);
}

displayInfo.call(s1);