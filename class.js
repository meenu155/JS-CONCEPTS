class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
    welcome() { // methoud out of consructor and also no need to do this
        console.log(`greetings from ${this.name}`)
    }
}
const person1 = new Person("Joseph", 35)
const person2 = new Person("Caroline", 25)
console.log(person1) //Person { name: 'Joseph', age: 35 }
console.log(person2)
person1.welcome() //greetings from Joseph