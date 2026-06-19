let x =1;
function add(a,b){
    return a+b;
}

console.log(add(2,3));
console.log(add(2));
console.log(add("hello",3,4,5));

// Drawback of JavaScript: 
// It does not give any error if we pass less or more parameters than defined in the function.
//  It will not even give an error if we pass a different type of parameter than defined in the function. It will just return undefined or NaN or some unexpected result. This can lead to bugs in the code and make it difficult to debug.
// There is no type safety in JavaScript, 
// which means that we can assign any type of value to a variable and it will not give any error.
// This can lead to bugs in the code and make it difficult to debug.
