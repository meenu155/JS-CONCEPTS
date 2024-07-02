class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
    welcome() { // methoud out of consructor and also no need to do this
        console.log(`greetings from ${this.name}`)
    }
}
class Student extends Person {
    constructor(_name, _age, _section) {
        super(_name, _age)
        this.section = _section
    }
}
st = new Student("Lily", 15, "A")
console.log(st)