let p1 = {
    fname: "Akul",
    age: 21,
    print: function() {
        console.log(this.fname)
    }

}
let p2 = {
    fname: "Amit",
    age: 20,

}
let print2 = function(power) {
    console.log(this.fname, power)
}
p1.print()
p1.print.call(p2)
print2.call(p1, 'fire')
print2.apply(p2, ['water']) //here we need to use array
    //bind
let v = print2.bind(p1, 'fire') //it bind the function
console.log(v)
v()