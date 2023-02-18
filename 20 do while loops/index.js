// do while loop = do something.
//                 then check the condition.
//                 repeat if the condition is true!
//
//      Big Difference, here you DO it at least once
//                      then check if needed again
let userName;


do {
    userName = window.prompt("Enter your name");
} while (userName == "")

console.log("Hello", userName);