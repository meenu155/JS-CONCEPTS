"use strict"
console.log(this) //window object

function display() {
    console.log(this)
}
display() //window object
let myboj = {
    name: "Amit",
    fun: function() {
        console.log(this)
    }
}
myboj.fun() //{ name: 'Amit', fun: [Function: fun] }getobject itlself
let myboj2 = {
    name: "Aarti",
    fun: function() {
        function child() {
            console.log(this) //window object
        }
        child()
    }
}
myboj2.fun()