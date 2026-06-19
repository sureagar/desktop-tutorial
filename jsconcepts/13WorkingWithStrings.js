//working with Strings
// number, string, boolean, null, undefined,Array, Object, function
// numbers, strings, arrays, objects, functions

// finding the length of the string
let str = "Hello World";
console.log(str.length);

// finding length of the string without using length property
let count = 0;
for(let i in str){
    count++;
}
console.log("Length of the string is: "+count);

//Convert string to uppercase
console.log(str.toUpperCase());

//Convert string to lowercase
console.log(str.toLowerCase());

//Find the index of a character in a string
console.log(str.indexOf("o"));

//Write a function to Find the index of a character in a string without using indexOf method
function findIndex(str, char){
    for(let i=0; i<str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
    return -1;
}

console.log(findIndex(str, "o"));

//trim the spaces from the string
let str2 = "   Hello World   ";
console.log(str2.trim());

// Regular Expressions: it is a pattern that is used to match character combinations in strings

// . - matches any character except newline
// * - matches 0 or more occurrences of the preceding character
// + - matches 1 or more occurrences of the preceding character
// ? - matches 0 or 1 occurrence of the preceding character
// \d - matches any digit
// \w - matches any word character
// \s - matches any whitespace character
// ^ - matches the beginning of the string
// $ - matches the end of the string
// () - groups the regular expression
// [] - matches any character in the brackets
// [a-z] - matches any lowercase letter
// [A-Z] - matches any uppercase letter
// [0-9] - matches any digit : 0 to 9
// [0-9]{3} - matches exactly 3 digits : 100, 999
// [0-9]{3,} - matches 3 or more digits: 100, 1000, 10000
// [0-9]{1,3} - matches 1 to 3 digits : 0 to 999
// Create a regular expression to match a string that starts with "Hello" and ends with "World"

// Verify a number is Pan Number or not using regular expression
// Regular expressions are used to validate the data based on standards
// Standard of PAN Number: 5 characters followed by 4 digits followed by 1 character

let samplePAN = "ABCDE1234F";
let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

let rp= /^[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]$/;
//verify the PAN number using test method of regular expression
console.log(panRegex.test(samplePAN));
console.log(rp.test(samplePAN));

// Create a regular expression for mobile number: it should start with 6,7, 8, 9 
// and should be of 10 digits

// [0-9]{10} - matches 10 digits
// [6-9] - matches any digit from 6 to 9
// ^[6-9][0-9]{9}$ - matches a string that starts with 6,7,8,9 and is followed by 9 digits
let sampleMobile = "9876543210";
let mobileRegex = /^[6-9][0-9]{9}$/;
console.log(mobileRegex.test(sampleMobile));