//      slice() extracts a section of a string
//         and returns it as a new string,
//      without modifying the original string

let fullName = "Siavash Ahmadi";
let firstName;
let lastName;

// firstName = fullName.slice(0, 7);
// lastName = fullName.slice(8);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); 