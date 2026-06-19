// Switch Case
// Switch case is used when we have multiple conditions to check
// It is more efficient than if-else if we have more than 3 conditions to check

// if syntax: if (condition) { } else if (condition) { } else { }

// Syntax of switch case
/* switch (expression) { 
  case v1: 
    code to execute
    break;
  case v2: 
    code to execute
    break;
  case default: 
    code to execute
}
*/
let day = 10;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}