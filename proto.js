let o = {}
console.log(o)
let my = {
    name: "ll",
    age: 21
}
console.log(my.hasOwnProperty("name"))

function constructorf(_name) {
    this.name = _name
}
let o2 = new constructorf("Alia")
console.log(o2)