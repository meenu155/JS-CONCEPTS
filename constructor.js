function createCar(_name, _company, _color) {
    console.log(this) //using tnew we have empty object createCar {}
    this.name = _name
    this.company = _company
    this.color = _color
    this.drive = function() {
        console.log(`running the car ${this.name}`)
    }
}
const first = new createCar("Brio", "Honda", "black")
console.log(first)
first.drive()