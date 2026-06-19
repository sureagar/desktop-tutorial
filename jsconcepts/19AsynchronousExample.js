// Callback hell example

// A function calling back another function calling back another function and so on is called callback hell.
// It makes the code difficult to read and maintain.

// Callback are created to handle asynchronous operations in JavaScript.
// But when we have multiple asynchronous operations that depend on each other, 
// we end up with nested callbacks, which is called callback hell.

// To avoid callback hell, we can use Promises or async/await syntax, 

// Syntax for Promise: new Promise((resolve, reject) => { // code here })

// resolve, reject are also functions that gets called on resolved and rejected state of the promise respectively.

// Promisses have 3 states: pending, resolved, rejected.
// pending: initial state, neither fulfilled/resolved nor rejected.
// fulfilled/resolved: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// Calling promise: promise.then(onFulfilled function).catch(onRejected function);

// Promise for waiting for 1 second

function waitforTimeout(timeout) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("waiting for " + timeout + " seconds")
            let isWaitingSuccessful = true; // change this to false to test the reject case
            if (isWaitingSuccessful) {
                resolve();
            } else {
                reject("waiting failed");
            }
        }, timeout * 1000);
    });
}

// waitforTimeout(2).then(() => {
//     console.log("waiting successful");
// }).catch((error) => {
//     console.log(error);
// });

// Promise chaining: to avoid callback hell, we can chain promises using then() method.
// Each then() returns a new promise, which allows us to chain multiple then() calls together.
// waitforTimeout promise chaining with multiple waitforTimeout calls

// waitforTimeout(5)
// .then(() =>waitforTimeout(3))
// .then(() =>waitforTimeout(2))
// .then(() =>waitforTimeout(1))
// .then(() =>waitforTimeout(6))
// .then(() => {
//     console.log("all waiting successful");
// }).catch((error) => {
//     console.log(error);
// });

// How promise works?
// When we call a promise, it is in the pending state.
// When the asynchronous operation is completed successfully, 
// the promise is resolved and the onFulfilled function is called. (then callback)
// If the asynchronous operation fails, 
// the promise is rejected and the onRejected function is called. (catch callback)
// Using then we can call one by one promise
// That becomes promise chaining, which is a way to avoid callback hell.
// This is still creating confusion to the user, So we use async/await to asynchronous 

// The function should start with async keyword to use await inside it.
// Use await before calling any function that returns promise
// await will wait for the promise to resolve and return the resolved value.
// if the function not returning promise, await will not work.

(async function () {

    await waitforTimeout(5);
    await waitforTimeout(3);
    await waitforTimeout(2);
    await waitforTimeout(1);
    await waitforTimeout(6);
    await test();
})().then(() => {
    console.log("all waiting successful");
}).catch((error) => {
    console.log(error);
});


async function test() {
    await waitforTimeout(5);
}

// Selenium : Open source tool started in 2004
// WebDriver : Created in 2006
// Selenium Webdriver 2.0: 2011
// Cypress: 2015
// Playwright: 2020 Jan
// Puppeteer: 2017 
// Testcafe: 2018
