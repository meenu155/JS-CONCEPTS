const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", "utf8", cb1);

function cb1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

        fs.readFile("f2.txt", "utf8", cb2);
    }
}


function cb2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        fs.readFile("f3.txt", "utf8", cb3);
    }
}


function cb3(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}


console.log("after") //we have achieved serial data by writing then in each other