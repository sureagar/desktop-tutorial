// While Loop

// let isElementDisplayed = false;
let isBusArrived = false;

let count = 0;

while (!isBusArrived) {
    console.log("Bus is not arrived, wait for it");
    count=count+1;

    if (count == 5) {
        isBusArrived = true;
        console.log("Bus is arrived, get on the bus");
    }
}

// let isElementDisplayed = true;

// while (isElementDisplayed) {
//     console.log("Element is not displayed, wait for it");
//     // This is an infinite loop, because the condition is always true
// }

// Do-While Loop
// While executes the block 0 or more times
// Do-While executes the block 1 or more times
// While loop checks condition first and then executes the block
// Do-While loop executes the block first and then checks the condition

let isElementDisplayed = false;

do {
    console.log("Element is not displayed, wait for it");
    // Write code to check element is displayed on page
    // if displayed, then set isElementDisplayed to true
    isElementDisplayed = true; // This is just for demonstration, in real scenario you will check the element is displayed or not
} while (!isElementDisplayed);
