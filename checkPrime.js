// Program to Check Prime Number
function isPrime(n) {
    // Corner case
    if (n <= 1)
        return "Number is Not a prime";

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return "Number is Not a Prime Number";

    return "Number is  a Prime Number";


}
console.log(isPrime(39))