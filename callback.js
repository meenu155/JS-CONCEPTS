const operate = (a, b, callback) => {
    console.log(a, b)
    callback(a, b)
}
operate(3, 2, function(x, y) {
        console.log(x * y)
    })
    //array callback functions
const a = [1, 2, 3, 4, 5, 11, 12, 12]

function check(element) {
    return element > 10
}
const res = a.find(check)
console.log(res)
const res2 = a.findIndex(check)
console.log(res2)
    // higher order function
const resarr = a.map(function(n) {
    return n * n
})
console.log(resarr);
// for each will not create a newarray
a.forEach(function(n) {
        console.log(n * n * n);
    })
    //some method return true if even one eleelemt satiesfies that condition
const ans = a.some(function(n) {
    console.log(n)
    return n == 5
})
console.log(ans)
const ans2 = a.every(function(n) {
    return n == 5
})
console.log(ans2)
    //chaining
const people = [
    { gender: 'male', age: 30 },
    { gender: 'female', age: 25 },
    { gender: 'male', age: 40 },
    { gender: 'female', age: 35 },
];
// need an array of male ages
const maleage = people.filter(function(n) {
    return n.gender == "male"
}).map(function(n) {
    return n.age
})
console.log(maleage)
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Using reduceRight to concatenate strings in reverse order
const words = ["Hello", " ", "World", "!"];
const reversedString = words.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(reversedString); // Output: "!World Hello"