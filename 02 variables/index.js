// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// 2 Steps:
//    1 - Declaration (var, let, const)
//    2 - Assignment ( = is the assignment operator)

let firstName = "Swishvash";  // Strings
let age = 24;  // Numbers
let student = false; // Booleans

age = age + 69;

console.log("Hello", firstName);
console.log("You are", age);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + firstName;