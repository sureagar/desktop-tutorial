// print prime numbers between 1 to 100

// devisible by only 1 and it self

let n = 47;
let isPrime = true; // Falg variable
for (let i = 2; i < n/2; i++) {
    console.log("Checking if " + n + " is divisible by " + i);
    if (n % i == 0) {
        console.log(n + " is not a prime number");
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n + " is a prime number");
}