"use strict"
console.log(this)

function display() {
    console.log(this)
}
display() //undefine
let myboj = {
    name: "Amit",
    fun: function() {
        console.log(this)
    }
}
myboj.fun() //give object{ name: 'Amit', fun: [Function: fun] }
let myboj2 = {
    name: "Aarti",
    fun: function() {
        function child() {
            console.log(this) //global object
        }
        child()
    }
}
myboj2.fun() //undefine