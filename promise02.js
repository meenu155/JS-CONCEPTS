function Placeorder(drink) {
    return new Promise((resolve, reject) => {
        if (drink == "coffee") {
            resolve("order is placed")
        } else {
            reject("not applicable")
        }
    })

}

function Making(drink) {
    return new Promise((resolve, reject) => {
        resolve("served")
    })
}
Placeorder("coffee").then((orderPlaced) => {
    console.log(orderPlaced)
    let ans = Making(orderPlaced)
    return ans

}).then((res) => {
    console.log(res)
})