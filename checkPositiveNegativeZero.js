// Program to Check if a number is Positive, Negative, or Zero
function toCheckNumber(number){
    if(number===0){
        return "zero"
    }
    else if (number < 0){
        return "Negative"
    }
    else return "Positive"
}
const reurnValue =toCheckNumber(0)
console.log(reurnValue);