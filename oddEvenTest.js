// Program to Check if a Number is Odd or Even
function isOddOrEven(number){
    if(number % 2 === 0){
        return "Number is Even"
    }
    return "Number is Odd"
}
const number = isOddOrEven(8)
console.log(number)


function toChangeKmIntoMile (number){
            return number * 0.625
}
const returnValue = toChangeKmIntoMile (1000)
console.log("Answer is :" , returnValue)