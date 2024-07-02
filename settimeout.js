console.log("before")

function greet() {
    console.log("hi there!")
}
setTimeout(greet, 3000)
console.log("after")
    //The 3000 milliseconds countdown starts from the moment setTimeout is called,
    // not after the synchronous code execution is completed.