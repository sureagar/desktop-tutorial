// setTimeout(() => {
//     console.log("this is after 1 second")
//     setTimeout(() => {
//         console.log("this is after 3 second")
//         setTimeout(() => {
//             console.log("this is after 2 second")
//         }, 2000);
//     }, 3000);
// }, 1000);

//JS executes code line by line but behaves asynchronous
// It doesn't wait for statement completion
// To make asynchronous to synchronous behavior
// Callbacks are introduced to handle this. But end up in call back hell

function waitfor1second() {
    setTimeout(() => {
        console.log("waiting for 1 second")
    }, 1000);
}

function waitfor3seconds(cb1, cb2) {
    setTimeout(() => {
        console.log("waiting for 3 seconds")
        cb1(cb2);
    }, 3000);
}

function waitfor2seconds(cb) {
    setTimeout(() => {
        console.log("waiting for 2 seconds")
        cb();
    }, 2000);
}

waitfor3seconds(function () {
    setTimeout(() => {
        console.log("waiting for 1 second")
    }, 1000);
});

waitfor3seconds(function (cb) {
    setTimeout(() => {
        console.log("waiting for 2 second")
        cb();
    }, 2000);
}, function () {
    setTimeout(() => {
        console.log("waiting for 1 second")
    }, 1000);
});

waitfor3seconds(waitfor2seconds, waitfor1second)

// Create a function that takes callback and executes

function calculateNumbers(a,b,operation){
    return operation(a,b);
}

let res = calculateNumbers(10,20,function(x,y){
    return x+y
});
console.log(res);

console.log(calculateNumbers(20,30,function(x,y){
    return x*y
}));

console.log(calculateNumbers(20,30,(x,y)=>{
    return x*y
}));

console.log(calculateNumbers(20,30,(x,y)=>x-y));
calculateNumbers(100,200,(a,b)=>a+b);