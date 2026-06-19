let data = [10, 20, 30, 40];
let userData = { username: "test", password: "test123", age: 30 };

for (let n = 0; n < data.length; n++) {
    console.log(data[n]);
}

for (let i in data) {
    console.log(data[i])
}

for (let x of data) {
    console.log(x)
}
// For in Loop
// For of loop
// For each

for (let key in userData) {
    console.log(key);
    console.log(key+":"+userData[key]);
    console.log(key,userData[key]);
}

// for of loop is used to iterate over iterable objects like arrays
// for in loop is used to iterate over the properties of an object

// for of loop or for in loop doesn't need initialization, condition and incrementation
// for of loop automatically interate over the elements of an array and gets the value
// for in loop automatically interate over the properties of an object and gets the key

data.forEach(function(value){
    console.log(value);
});

data.forEach((value,index)=>{
    console.log(value,index);
});
// for each loop is used to iterate over the elements of an array and gets the value. It is a method of array. It takes a callback function as an argument. The callback function is called for each element of the array. The callback function takes the current value as an argument. It is more concise than for loop and for of loop. It is not used to iterate over the properties of an object.