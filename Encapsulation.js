class Person {
    constructor(_name, _age) {
        let name = _name;
        this.age = _age;

        this.getName = function() {
            return name;
        }
    }
}

let o = new Person("lily", 32);
console.log(o.getName()); // Output: lily