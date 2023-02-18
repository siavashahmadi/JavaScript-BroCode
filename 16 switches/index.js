// switch = statement that examines a value
//          for a match againsy many case clauses.
//          
//    This is more efficient than many "else if" statements

let grade = 61;

switch (true) {
    case grade >= 90:
        console.log("You got an A!");
        break;
    case grade >= 80:
        console.log("You got a B!");
        break;
    case grade >= 70:
        console.log("You got a C.");
        break;
    case grade >= 60:
        console.log("You got a D...");
        break;
    case grade < 60:
        console.log("You Failed!");
        break;
    default:
        console.log(grade, "is not a letter grade!")
}