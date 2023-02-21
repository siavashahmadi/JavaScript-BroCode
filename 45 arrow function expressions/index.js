// arrow function = compact alternative to a traditional function expression
//      =>

/*
    const greeting = function (userName) {
        console.log(`Hello ${userName}`);
    }
    greeting("Sia");

*/

/*
    const greeting = (userName) => console.log(`Hello ${userName}`);
    greeting("Sia");
*/

// const percent = (x, y) => x / y * 100;
// console.log(`${percent(75, 100)}%`);

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);

grades.forEach((element) => { console.log(element); });