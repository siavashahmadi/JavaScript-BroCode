// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of Rows");
let columns = window.prompt("Enter a # of Columns");

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}