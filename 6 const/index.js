// const = a variable that CANNOT be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of your circle");
radius = Number(radius);

// PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);