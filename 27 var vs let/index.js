// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global vairable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// Considered good practice to use let over var

var name = "Siavash";

doSomething();

function doSomething() {
    for (var i = 1; i <= 3; i += 1) {
        // console.log(i);
    }
}

console.log(i);