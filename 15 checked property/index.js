
document.getElementById("myButton").onclick = function () {
    if (document.getElementById("myCheckBox").checked == true) {
        console.log("You are subscribed!");
    } else {
        console.log("You are NOT subscribed!");
    }
}