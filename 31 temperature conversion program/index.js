document.getElementById("submitButton").onclick = function () {
    let temp;

    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        document.getElementById("tempLabel").innerHTML = toCelsius(temp) + "°C";
    } else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        document.getElementById("tempLabel").innerHTML = toFarenheit(temp) + "°F";

    } else {
        document.getElementById("tempLabel").innerHTML = "Select a unit!";
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFarenheit(temp) {
    return temp * 9 / 5 + 32;
}