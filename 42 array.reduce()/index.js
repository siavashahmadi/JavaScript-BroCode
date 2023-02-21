// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkout);

console.log(`The total is $${total}`);

function checkout(total, element) {
    console.log(total);
    console.log(element);
    return total + element;
}