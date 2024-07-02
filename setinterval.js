function hello() {
    console.log("hello")
}
//setInterval(hello, 3000) // this will go inginute times and will print hello after evry 3 seconds
let timer = setInterval(hello, 3000)
console.log(timer) //object
setTimeout(function() {
    clearInterval(timer)
}, 3000)