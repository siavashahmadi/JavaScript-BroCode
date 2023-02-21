// array.map() = executes a provided callback function
//                  once for each array element
//                  AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let sqaures = numbers.map(squareNumbers);
let cubes = numbers.map(cubeNumbers);

cubes.forEach(print);

function squareNumbers(element) {
    return Math.pow(element, 2);
}

function cubeNumbers(element) {
    return Math.pow(element, 3);
}

function print(element) {
    console.log(element);
}