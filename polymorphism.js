class Fruit {
    constructor(_name) {
        this.name = _name
    }
    greet() {
        console.log("fruit")
    }
}
class Apple extends Fruit {
    constructor(_name, _type) {
        super(_name); // Call the constructor of the parent class
        this.type = _type;
    }
    greet() {
        console.log("I am an apple")
    }
}
o1 = new Fruit("name1")
o2 = new Apple("name2", "t1")
o1.greet()
o2.greet()
    //NOte
    //In the Apple class, when you define a constructor, 
    //you need to call the parent class constructor using super(_name). 
    //Otherwise, the name property of the Fruit class won't be initialized correctly