const repeatString = function(testWord, number) {
    if (number == 0) {
        return "";
    }
    else if (number < 0) {
        return "ERROR";
    }
    else {
        let finalWord ="";
        for (let i=0; i < number; i++) {
            
            finalWord += testWord;
        }
        return finalWord;
    }
    }

// Do not edit below this line
module.exports = repeatString;
