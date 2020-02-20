//Using bind
let s1 = {fname: "Juan", lname: "Dela Cruz"};
let s2 = {fname: "Pedro", lname: "Reyes"};

let joinName = function(){
    console.log(`${this.fname} ${this.lname}`);
}

let y = joinName.bind(s1);
y();