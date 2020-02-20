//Using static
class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    static eat(food){
        console.log(`${this.name} eats plenty of ${food}`);
    }
}

let sissi = new Dog("Sissi", "Corgi");
Dog.eat("meat");