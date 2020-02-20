//Using non-static
class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    eat(food){
        console.log(`${this.name} eats plenty of ${food}`);
    }
}

let sissi = new Dog("Sissi", "Corgi");
sissi.eat("meat");