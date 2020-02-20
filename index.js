//Using encapsulation
class Dog{
    setName(name){
        this.name = name;
    }
    setBreed(breed){
        this.breed = breed;
    }
    getName(){
        return this.name;
    }
    getBreed(){
        return this.breed;
    }
}

let doggo = new Dog();
doggo.setName("Sissi");
doggo.setBreed("Corgi");
console.log(`${doggo.getName()} is a ${doggo.getBreed()}`);