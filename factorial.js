// Program to Find the Factorial of a Number
function factorialOfNumber(number){
    let factorial = 1;
    for(i=2;i<=number;i++)
       factorial = factorial*i
       return factorial
    
}

console.log(factorialOfNumber(5))