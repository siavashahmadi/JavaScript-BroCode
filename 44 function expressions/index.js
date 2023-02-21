// function expression = function without a name (anonymous function)
//                      avoid polluting the global scope with names
//                      Write it, then forget about it

// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

// Older way


// Newer way below

// const greeting = function () {
//     console.log("Hello");
// }

// greeting(); 


// Counter Application

let count = 0;

document.getElementById("decreaseButton").onclick = function () {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count
}

document.getElementById("increaseButton").onclick = function () {
    count += 1;
    document.getElementById("myLabel").innerHTML = count
}

//                                      This below, would be the old way i would do it
//                                      This code would also require an onclick="increaseCount()"
//                                      tag within the button tags
// function increaseCount() {
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }