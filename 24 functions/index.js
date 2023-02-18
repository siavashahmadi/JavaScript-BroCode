// function = Define code once, Use it many times
//          
//   To perform some code, call the function name

startProgram();

function startProgram() {
    let userName = "Siavash Ahmadi";
    let age = 24;

    happyBirthday(userName, age);
}

function happyBirthday(a, b) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you!");
    console.log("You are", b, "years old!");
}
