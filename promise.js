const mypromise = new Promise(function(resolve, reject) {
    let a = 2
    let b = 3
    setTimeout(() => {
        if (a == b) {
            resolve("equal")
        } else {
            reject("not")
        }
    }, 2000)
})
console.log(mypromise) //pending state
mypromise.then(function(res) {
    console.log(res)
})
mypromise.catch((err) => {
    console.log(err)
})