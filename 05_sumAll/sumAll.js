const sumAll = function(firstNumber,secondNumber) {
    let finalSum = 0;
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
    if (firstNumber < 0 || secondNumber < 0){
        return "ERROR"
    }
    else if (secondNumber < firstNumber) {
        for (secondNumber; secondNumber <= firstNumber; secondNumber++) {
            finalSum += secondNumber;
        }
    }
    else {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            finalSum += firstNumber;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
