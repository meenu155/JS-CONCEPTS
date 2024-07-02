class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
    Welcome() { // methoud out of consructor and also no need to do this
        console.log(`greetings from ${this.name}`)
    }
}
class Student extends Person {
    constructor(_name, _age, _section) {
        super(_name, _age)
        this.section = _section
    }
    test() {
        super.Welcome()
    }
}
st = new Student("Lily", 15, "A")
st2 = new Student("Harry", 14, "B")
console.log(st2)
console.log(st)
st.test()